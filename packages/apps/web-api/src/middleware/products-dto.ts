import { Request, Response, NextFunction } from 'express';
import Joi, { ValidationError } from 'joi';

export class ProductsDto {
  private creationSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    image_link: Joi.string()
      .uri({ scheme: ['http', 'https'] })
      .regex(/\.(png|jpe?g|webp)$/i)
      .required(),
    price: Joi.number().positive().required(),
  });

  private paramsSchema = Joi.object({
    id: Joi.number().integer().positive().min(1).required(),
  });

  public async creation({ body }: Request, res: Response, next: NextFunction) {
    try {
      // Save the data in res.locals to make them accessible in the controller.
      res.locals.content = await this.creationSchema.validateAsync(body);

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

  public async id({ params }: Request, res: Response, next: NextFunction) {
    try {
      // Save the data in res.locals to make them accessible in the controller.
      res.locals.params = await this.paramsSchema.validateAsync(params);

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
