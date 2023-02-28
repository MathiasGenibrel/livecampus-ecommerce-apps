import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('increment', {
    unsigned: true,
  })
  id: number;

  @Column('text')
  address: string;

  @Column('text')
  address2: string;

  @Column('text')
  city: string;

  @Column('integer')
  postal_code: number;
}
