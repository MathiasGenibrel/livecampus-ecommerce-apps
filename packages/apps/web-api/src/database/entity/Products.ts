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

  @Column('varchar', {
    length: 255,
  })
  name: string;

  @Column('text')
  description: string;

  @Column('text')
  image_link: string;

  @Column('int')
  price: number;

  @OneToOne(() => Categories)
  @JoinColumn()
  categories: string;
}
