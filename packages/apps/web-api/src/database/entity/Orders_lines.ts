import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Products } from './Products';
import { Orders } from './Orders';

@Entity()
export class Orders_lines {
  @PrimaryGeneratedColumn('increment', {
    unsigned: true,
  })
  id: number;

  @OneToOne(() => Products)
  @JoinColumn()
  products: number;

  @OneToOne(() => Orders)
  @JoinColumn()
  orders: number;

  @Column('integer')
  quantity: number;
}
