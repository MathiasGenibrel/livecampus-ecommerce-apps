export enum OrdersStatus {
  VALIDATED = 'Validated',
  PAID = 'Paid',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled',
}

export interface Orders {
  id: number;
  date_order: number;
  status: OrdersStatus;
}

export interface OrdersEntity extends Orders {
  /**
   * Corresponding to the users foreign key
   */
  users: number;
}
