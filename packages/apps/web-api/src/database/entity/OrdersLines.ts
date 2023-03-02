import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Products } from './Products';
import { Orders } from './Orders';

@Entity()
export class OrdersLines {
  @PrimaryGeneratedColumn('increment', {
    unsigned: false,
  })
  id: number;

  @ManyToOne(() => Products, (products) => products.orders_lines)
  @JoinColumn({ name: 'productsId' })
  productsId: number;

  @ManyToOne(() => Orders, (orders) => orders.orders_lines)
  @JoinColumn({ name: 'ordersId' })
  ordersId: Orders;

  @Column('integer')
  quantity: number;
}
