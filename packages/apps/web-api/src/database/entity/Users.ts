import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './Address';
import { UsersEntity, UsersRoles } from '../../types/users.types';

@Entity()
export class Users implements UsersEntity {
  @PrimaryGeneratedColumn('increment', {
    unsigned: true,
  })
  id: number;

  @Column('text', {
    nullable: false,
    unique: true,
  })
  email: string;

  @Column('text', {
    nullable: false,
  })
  password: string;

  @Column('text', {
    nullable: true,
  })
  firstname?: string;

  @Column('text', {
    nullable: true,
  })
  lastname?: string;

  @Column('text', {
    default: UsersRoles.CUSTOMER,
    nullable: false,
  })
  role: UsersRoles;

  @OneToOne(() => Address)
  @JoinColumn()
  address: number;
}
