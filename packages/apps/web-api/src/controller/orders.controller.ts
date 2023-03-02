import { Request, Response } from 'express';
import { IOrders, OrdersInput, OrdersStatus } from '../types/orders.types';
import { Orders } from '../database/entity/Orders';
import { AppDataSource } from '../database/data-source';
import { Repository } from 'typeorm';

export class OrdersController {
  private readonly ordersRepository: Repository<Orders>;

  constructor() {
    this.ordersRepository = AppDataSource.getRepository(Orders);
  }

  /**
   * Get all previous order
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public async history(
    req: Request,
    res: Response
  ): Promise<Response<IOrders[]>> {
    const ordersHistory: IOrders[] = [
      {
        id: 1,
        date_order: 1677612786,
        status: OrdersStatus.VALIDATED,
      },
      {
        id: 2,
        date_order: 1675654797,
        status: OrdersStatus.PAID,
      },
    ];

    return res.status(200).json(ordersHistory);
  }

  /**
   * Create an order
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public async create(req: Request, res: Response): Promise<Response<void>> {
    const content = res.locals.content as OrdersInput;

    try {
      await this.ordersRepository.save(content);

      return res.status(201).send();
    } catch (err: unknown) {
      console.error(err);

      res.status(500).send();
    }
  }

  /**
   * Update order status
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public async updateStatus(
    req: Request,
    res: Response
  ): Promise<Response<void>> {
    return res.status(204).send();
  }
}
