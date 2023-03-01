import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UsersCredentialToken } from '../types/users.types';
import { environment } from '../environment/environment';
import { JsonWebTokenError } from 'jsonwebtoken';
import { BadRequestError } from '../Error/BadRequestError';

export class Authorization {
  private getUsersCredential(authorization: string): UsersCredentialToken {
    const decodedToken: RegExpMatchArray | null =
      authorization.match(/(?<=Bearer\s)\S+/);

    if (!decodedToken)
      throw new BadRequestError(
        'Your token is invalid, try again',
        'INVALID TOKEN'
      );

    return jwt.verify(
      decodedToken[0],
      environment.signedToken
    ) as UsersCredentialToken;
  }

  public validate(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;

    if (!authorization)
      res.status(400).json({
        code: 'INVALID TOKEN',
        message: 'Your token is invalid, try again',
      });

    try {
      res.locals.usersCredentialToken = this.getUsersCredential(authorization);

      next();
    } catch (err: unknown) {
      console.error(err);

      if (err instanceof JsonWebTokenError)
        return res.status(400).json({
          code: err.name,
          message: err.message,
        });

      if (err instanceof BadRequestError)
        return res.status(err.status).json({
          code: err.code,
          message: err.message,
        });

      res.status(500).send();
    }
  }
}
