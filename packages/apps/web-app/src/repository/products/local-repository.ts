import { ProductsRepository } from './repository';
import { Products } from '../../types/products';

import { mockedProducts } from '../../mock/mockedProducts';

export class LocalRepository implements ProductsRepository {
  private async fakeRequest<T>(content: T): Promise<T> {
    return await new Promise((resolve) => {
      // Use a timeout to simulate http request
      setTimeout(() => resolve(content), 5000);
    });
  }

  public async find(id: number): Promise<Products> {
    return await this.fakeRequest<Products>(mockedProducts[id - 1]);
  }

  public async findAll(): Promise<Products[]> {
    return await this.fakeRequest<Products[]>(mockedProducts);
  }
}
