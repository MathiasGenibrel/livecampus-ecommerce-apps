import { ProductsRepository } from './repository';
import { Products } from '../../types/products';

import { mockedProducts } from '../../mock/mockedProducts';

export class LocalRepository implements ProductsRepository {
  private async fakeRequest<T>(content: T): Promise<T> {
    return await new Promise((resolve) => {
      setTimeout(() => resolve(content), 200); // Use a 200ms delay to simulate http request
    });
  }

  public async find(id: number): Promise<Products> {
    return await this.fakeRequest<Products>(mockedProducts[id]);
  }

  public async findAll(): Promise<Products[]> {
    return await this.fakeRequest<Products[]>(mockedProducts);
  }
}
