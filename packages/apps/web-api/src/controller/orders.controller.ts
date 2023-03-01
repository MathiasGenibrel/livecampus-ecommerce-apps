import { Request, Response } from 'express';
import { Orders, OrdersStatus } from '../types/orders.types';

export class OrdersController {
  /**
   * Get all previous order
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public history(req: Request, res: Response): Response<Orders[]> {
    const ordersHistory: Orders[] = [
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
  public create(req: Request, res: Response): Response<void> {
    return res.status(201).send();
  }

  /**
   * Update order status
   * @param req - Express Request type, body && header from the http request.
   * @param res - Express Response, used to respond to the client request.
   */
  public updateStatus(req: Request, res: Response): Response<void> {
    return res.status(204).send();
  }
}
