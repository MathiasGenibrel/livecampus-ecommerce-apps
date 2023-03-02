import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users';
import { OrdersEntity, OrdersStatus } from '../../types/orders.types';

@Entity()
export class Orders implements OrdersEntity {
  @PrimaryGeneratedColumn('increment', {
    unsigned: false,
  })
  id: number;

  @Column('integer', {
    nullable: false,
  })
  /**
   * Saving dates in timestamps
   */
  date_order: number;

  @Column('text', {
    default: OrdersStatus.VALIDATED,
    nullable: false,
  })
  status: OrdersStatus;

  @OneToOne(() => Users)
  @JoinColumn()
  users: number;
}
