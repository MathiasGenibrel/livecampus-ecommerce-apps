import { Request, Response, NextFunction } from 'express';
import Joi, { ValidationError } from 'joi';

export class OrdersDto {
  private ordersSchema = Joi.object({
    usersId: Joi.number().integer().positive().required(),
    orders_lines: Joi.array()
      .items(
        Joi.object({
          product: Joi.number().integer().positive().required(),
          quantity: Joi.number().integer().positive().required(),
        })
      )
      .min(1),
  });

  public async content({ body }: Request, res: Response, next: NextFunction) {
    try {
      // Save the data in res.locals to make them accessible in the controller.
      res.locals.content = await this.ordersSchema.validateAsync(body);

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
