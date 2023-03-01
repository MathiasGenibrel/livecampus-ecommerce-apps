import Joi, { ValidationError } from 'joi';
import { NextFunction, Request, Response } from 'express';

/**
 * Used to control input to correspond to current schema.
 */
export class UsersDto {
  private registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(12).required(),
  });

  public async register(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req);

      // Save the data in res.locals to make them accessible in the controller.
      res.locals.usersCredential = await this.registerSchema.validateAsync(
        req.body
      );

      return next();
    } catch (err) {
      console.log(err);

      if (err instanceof ValidationError)
        return res.status(400).json({
          code: err.name,
          message: err.message,
        });

      return res.status(500).send();
    }
  }
}
