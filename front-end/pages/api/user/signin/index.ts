import { NextApiRequest, NextApiResponse } from 'next'

import { serverFetch } from '../../../../services/fetcher';
import CookieService from '../../../../services/CookieService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method,  } = req;
  const url = process.env.API_HOST + '/user/signin';

  if (method === 'POST') {
    const data = await serverFetch(url, body);
    if (data?.errors) {
      return res.send(data)
    }

    CookieService.setAccessTokenCookie(req, res);
    res.send({ data: { success: true }});
  }
}
