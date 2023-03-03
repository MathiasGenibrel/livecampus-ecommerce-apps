import { Products } from '../../types/products';

export interface ProductsRepository {
  findAll: () => Promise<Products[]>;
  find: (id: number) => Promise<Products>;
}
