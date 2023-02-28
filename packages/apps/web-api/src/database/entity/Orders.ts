import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn('increment', {
    unsigned: true,
  })
  id: number;

  @Column('integer')
  /**
   * Saving dates in timestamps
   */
  date_order: number;

  @Column('text')
  status: ['Validated', 'Paid', 'Delivered', 'Cancelled'];

  @OneToOne(() => Users)
  @JoinColumn()
  users: number;
}
