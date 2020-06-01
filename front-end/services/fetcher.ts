import { polyfill } from 'es6-promise';
polyfill();
import fetch from 'unfetch';
import nodeFetch from 'node-fetch';
import CookieService from './CookieService';

interface CommonOptions {
  method?: string;
  headers?: {
    [key:string]: string;
  }
}

interface FetcherParameters extends CommonOptions {
  body?: {[key:string]: string;};
}

interface FetchOptions extends CommonOptions {
  body?: string;
}

export const serverFetch = (url: string, body: any) => nodeFetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
}).then(r => r.json());

export default (url: string, { body, method = 'POST' }: FetcherParameters) => {
  const accessToken = CookieService.getBrowserCookie('access_token');

  let headers: { [ key:string ]: string } = {
    'Content-Type': 'application/json',
  };

  if (accessToken) {
    headers = { ...headers, Authorization: `Bearer ${accessToken}` }
  }

  let options: FetchOptions = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(url, options).then(r => r.json());
}
