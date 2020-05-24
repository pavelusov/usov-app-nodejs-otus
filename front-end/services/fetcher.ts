import fetch from 'unfetch';

export default (url: string, body: any) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
}).then(r => r.json());
