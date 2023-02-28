import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './Address';
import { UsersRoles } from '../../types/users.types';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('increment', {
    unsigned: true,
  })
  id: number;

  @Column('text', {
    nullable: false,
  })
  email: string;

  @Column('text', {
    nullable: false,
  })
  password: string;

  @Column('text')
  firstname: string;

  @Column('text')
  lastname: string;

  @Column('text', {
    default: UsersRoles.CUSTOMER,
    nullable: false,
  })
  role: UsersRoles;

  @OneToOne(() => Address)
  @JoinColumn()
  address: number;
}
