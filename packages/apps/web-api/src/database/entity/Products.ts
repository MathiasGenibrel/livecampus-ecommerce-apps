import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../types/products.types';

@Entity()
export class Products implements Product {
  @PrimaryGeneratedColumn('increment', {
    unsigned: false,
  })
  id: number;

  @Column('text', {
    nullable: false,
  })
  name: string;

  @Column('text', {
    nullable: false,
  })
  description: string;

  @Column('text', {
    nullable: false,
  })
  image_link: string;

  @Column('int', {
    nullable: false,
  })
  price: number;
}
