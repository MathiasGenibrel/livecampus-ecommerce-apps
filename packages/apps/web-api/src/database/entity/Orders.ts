import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users';
import { OrdersEntity, OrdersStatus } from '../../types/orders.types';
import { OrdersLines } from './OrdersLines';

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

  @ManyToOne(() => Users, (users) => users)
  @JoinColumn({ name: 'usersId' })
  usersId: number;

  @OneToMany(() => OrdersLines, (ordersLines) => ordersLines.ordersId, {
    cascade: true,
  })
  orders_lines: OrdersLines[];
}
