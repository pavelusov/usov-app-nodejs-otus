import fetch from 'unfetch';
import nodeFetch from 'node-fetch';


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
  let options: FetchOptions = {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(url, options).then(r => r.json());
}
