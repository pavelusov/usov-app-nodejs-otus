import { NextApiRequest, NextApiResponse } from 'next'

import CookieService from '../../../../services/CookieService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    CookieService.clearAccessTokenCookie(req, res);
    res.send({ data: { success: true }});
  }
}
