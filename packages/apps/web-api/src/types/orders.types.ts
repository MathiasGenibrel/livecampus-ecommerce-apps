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
