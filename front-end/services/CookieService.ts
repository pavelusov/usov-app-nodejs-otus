import cookie from 'cookie';
import UniversalCookie from 'universal-cookie';

import JWTService from './JWTService';
import { NextApiRequest, NextApiResponse } from 'next';

class CookieService {
  static setAccessTokenCookie(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Set-Cookie', cookie.serialize('access_token', JWTService.generate(req.body.login), {
      httpOnly: false,
      secure: false,
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    }));
  }

  static clearAccessTokenCookie(_: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Set-Cookie', cookie.serialize('access_token', '', {
      httpOnly: false,
      secure: false,
      maxAge: -1,
      path: '/',
    }));
  }

  static getBrowserCookie(name: string): string | undefined {
    return new UniversalCookie().get(name);
  }
}

export default CookieService;
