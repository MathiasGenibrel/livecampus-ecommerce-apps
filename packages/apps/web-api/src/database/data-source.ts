import { DataSource } from 'typeorm';
import { Address } from './entity/Address';
import { Users } from './entity/Users';
import { Orders } from './entity/Orders';
import { Orders_lines } from './entity/Orders_lines';
import { Products } from './entity/Products';
import { Categories } from './entity/Categories';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'beepshop',
  synchronize: true,
  logging: true,
  entities: [Users, Address, Categories, Products, Orders, Orders_lines],
});
