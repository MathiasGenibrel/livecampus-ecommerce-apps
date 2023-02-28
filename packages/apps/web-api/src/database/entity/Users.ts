import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './Address';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('increment', {
    unsigned: true,
  })
  id: number;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column('text')
  firstname: string;

  @Column('text')
  lastname: string;

  @OneToOne(() => Address)
  @JoinColumn()
  address: number;
}
