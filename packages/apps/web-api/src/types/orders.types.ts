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
