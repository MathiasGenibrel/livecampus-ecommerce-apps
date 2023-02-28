import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users';
import { OrdersStatus } from '../../types/orders.types';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn('increment', {
    unsigned: true,
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
