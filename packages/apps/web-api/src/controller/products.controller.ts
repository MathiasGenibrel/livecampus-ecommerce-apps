import { Request, Response } from 'express';
import { Product } from '../types/products.types';

export class ProductsController {
  public find(req: Request, res: Response): Response<Product[]> {
    const products: Product[] = [
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

  public findOne(req: Request, res: Response): Response<Product> {
    const product: Product = {
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
   * @param req
   * @param res
   */
  public create(req: Request, res: Response): Response<void> {
    return res.status(201).send();
  }

  /**
   * Partial or complete edit of a product.
   * @param req
   * @param res
   */
  public edit(req: Request, res: Response): Response<void> {
    return res.status(204).send();
  }

  /**
   * Delete a product.
   * @param req
   * @param res
   */
  public delete(req: Request, res: Response): Response<void> {
    return res.status(204).send();
  }
}
