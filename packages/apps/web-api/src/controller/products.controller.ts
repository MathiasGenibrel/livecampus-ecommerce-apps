import { Request, Response } from 'express';
import { ProductsEntity } from '../types/products.types';
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
  public find(req: Request, res: Response): Response<ProductsEntity[]> {
    const products: ProductsEntity[] = [
      {
        id: 1,
        name: 'Airpods',
        price: 189,
        description: 'Wireless Headphone',
        image_link: 'http://localhost:3000/public/imgs/nameofimg123456',
      },
    ];

    return res.status(200).json(products);
  }

  /**
   * Find a product by his id
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public findOne(req: Request, res: Response): Response<ProductsEntity> {
    const product: ProductsEntity = {
      id: 1,
      name: 'Airpods',
      price: 189,
      description: 'Wireless Headphone',
      image_link: 'http://localhost:3000/public/imgs/nameofimg123456',
    };

    return res.status(200).json(product);
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
