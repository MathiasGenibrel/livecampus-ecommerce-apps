import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('increment', {
    unsigned: true,
  })
  id: number;

  @Column('text', {
    nullable: false,
  })
  address: string;

  @Column('text')
  address2: string;

  @Column('text', {
    nullable: false,
  })
  city: string;

  @Column('integer', {
    nullable: false,
  })
  postal_code: number;
}
