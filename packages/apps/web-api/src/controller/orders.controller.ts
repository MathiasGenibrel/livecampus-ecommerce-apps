import { Request, Response } from 'express';
import { IOrders, OrdersStatus } from '../types/orders.types';

export class OrdersController {
  public history(req: Request, res: Response): Response<IOrders[]> {
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

  public create(req: Request, res: Response): Response<void> {
    return res.status(201).send();
  }

  public updateStatus(req: Request, res: Response): Response<void> {
    return res.status(204).send();
  }
}
