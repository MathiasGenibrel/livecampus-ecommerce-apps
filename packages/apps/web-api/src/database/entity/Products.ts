import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Categories } from './Categories';

@Entity()
export class Products {
  @PrimaryGeneratedColumn('increment', {
    unsigned: true,
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

  @OneToOne(() => Categories)
  @JoinColumn()
  categories: string;
}
