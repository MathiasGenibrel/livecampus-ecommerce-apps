import { Response, Request } from 'express';
import { UserCredential } from '../types/users.types';

export class UsersController {
  /**
   * Get user account, response with an "ok" status and return UserCredential.
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public login(req: Request, res: Response): Response<UserCredential> {
    const userCredential: UserCredential = {
      username: 'mathias',
      token: 'randomToken',
    };

    return res.status(200).json(userCredential);
  }

  /**
   * Create user account, response with a "created" status.
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public register(req: Request, res: Response): Response<void> {
    return res.status(201).send();
  }

  /**
   * Edit user account, response with a "no content" status.
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public edit(req: Request, res: Response): Response<void> {
    return res.status(204).send();
  }

  /**
   * Delete user account, response with a "no content" status.
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public delete(req: Request, res: Response): Response<void> {
    return res.status(204).send();
  }
}
