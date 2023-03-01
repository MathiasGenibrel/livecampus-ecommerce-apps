import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { UserCredential, UsersCreationInput } from '../types/users.types';
import { AppDataSource } from '../database/data-source';
import { Users } from '../database/entity/Users';
import { Repository } from 'typeorm';
import { BadRequestError } from '../Error/BadRequestError';
import { environment } from '../environment/environment';

export class UsersController {
  private readonly usersRepository: Repository<Users>;

  constructor() {
    this.usersRepository = AppDataSource.getRepository(Users);
  }

  /**
   * Check if the user is in the database
   * @param email Email corresponding to the user to be verified
   * @private
   */
  private async exists(email: string): Promise<boolean> {
    return await this.usersRepository
      .createQueryBuilder()
      .where({ email })
      .getExists();
  }

  /**
   * Check if the user is already in database,
   * if he's on database throw a BadRequest error.
   * @param email Email corresponding to the user to be verified
   * @private
   */
  private async alreadyExists(email: string): Promise<void> {
    const userExists = await this.exists(email);

    if (userExists)
      throw new BadRequestError(
        'The user with this email already exists',
        'EMAIL IS NOT UNIQUE'
      );
  }

  /**
   * Get user account, response with an "ok" status and return UserCredential.
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public async login(
    req: Request,
    res: Response
  ): Promise<Response<UserCredential>> {
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
  public async register(req: Request, res: Response): Promise<Response<void>> {
    try {
      const usersCredential = res.locals.usersCredential as UsersCreationInput;
      // Check if the users is already registered
      await this.alreadyExists(usersCredential.email);

      const hashedPassword = await bcrypt.hash(
        usersCredential.password,
        environment.saltRound
      );

      // Insert user in database
      await this.usersRepository.insert({
        ...usersCredential,
        password: hashedPassword,
      });

      return res.status(201).send();
    } catch (err: unknown) {
      console.error(err);

      if (err instanceof BadRequestError)
        return res.status(err.status).json({
          code: err.code,
          message: err.message,
        });

      return res.status(500).send();
    }
  }

  /**
   * Edit user account, response with a "no content" status.
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public async edit(req: Request, res: Response): Promise<Response<void>> {
    return res.status(204).send();
  }

  /**
   * Delete user account, response with a "no content" status.
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public async delete(req: Request, res: Response): Promise<Response<void>> {
    return res.status(204).send();
  }
}
