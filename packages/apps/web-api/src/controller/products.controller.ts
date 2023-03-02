import { Request, Response } from 'express';
import { ProductsEntity, ProductsParams } from '../types/products.types';
import { Repository } from 'typeorm';
import { AppDataSource } from '../database/data-source';
import { Products } from '../database/entity/Products';

export class ProductsController {
  private readonly repository: Repository<ProductsEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(Products);
  }

  /**
   * Find all products
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public async find(
    req: Request,
    res: Response
  ): Promise<Response<ProductsEntity[]>> {
    try {
      const products = await this.repository.find();

      return res.status(200).json(products);
    } catch (err: unknown) {
      console.error(err);

      res.status(500).send();
    }
  }

  /**
   * Find a product by his id
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public async findOne(
    req: Request,
    res: Response
  ): Promise<Response<ProductsEntity>> {
    const params = res.locals.params as ProductsParams;

    try {
      const product: ProductsEntity | null = await this.repository.findOne({
        where: { id: params.id },
      });

      if (!product)
        return res.status(404).json({
          code: 'NOT FOUND',
          message: `Product with ${params.id} id, could not be found`,
        });

      return res.status(200).json(product);
    } catch (err: unknown) {
      console.error(err);

      return res.status(500).send();
    }
  }

  /**
   * Creation of a product
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public async create(req: Request, res: Response): Promise<Response<void>> {
    const content = res.locals.content;

    try {
      await this.repository.insert(content);

      return res.status(201).send();
    } catch (err: unknown) {
      console.error(err);

      res.status(500).send();
    }
  }

  /**
   * Partial or complete edit of a product.
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public edit(req: Request, res: Response): Response<void> {
    return res.status(204).send();
  }

  /**
   * Delete a product.
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public delete(req: Request, res: Response): Response<void> {
    return res.status(204).send();
  }
}
