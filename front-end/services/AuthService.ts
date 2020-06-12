import { IncomingMessage } from 'http';
import cookie from 'cookie';

import JWTService from "./JWTService";

class AuthService {
  static async hasSuccess(req: IncomingMessage): Promise<boolean> {
    const cookies = cookie.parse(req.headers?.cookie || '');

    if (cookies?.access_token) {
      const token = cookies.access_token;
      const data = await JWTService.verify(token);
      return !data?.msg;
    }

    return false;
  }
}

export default AuthService;
