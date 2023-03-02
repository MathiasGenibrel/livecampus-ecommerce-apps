import { Repository } from 'typeorm';
import { Request, Response } from 'express';

export enum OrdersStatus {
  VALIDATED = 'Validated',
  PAID = 'Paid',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled',
}

export interface IOrders {
  id: number;
  date_order: number;
  status: OrdersStatus;
}

export interface OrdersEntity extends IOrders {
  /**
   * Corresponding to the users foreign key
   */
  usersId: number;
}

interface OrdersLines {
  productsId: number;
  quantity: number;
}

export interface OrdersInput {
  date_order: number;
  usersId: number;
  orders_lines: OrdersLines[];
}

export interface AbstractOrdersController {
  ordersRepository: Partial<Repository<unknown>>;
  history: (req: Request, res: Response) => Promise<Response<IOrders[]>>;
  create: (req: Request, res: Response) => Promise<Response<void>>;
  updateStatus: (req: Request, res: Response) => Promise<Response<void>>;
}
