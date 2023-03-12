import { AuthRepository, Credential, UserRole } from './repository';

export class LocalAuthRepository implements AuthRepository {
  private async fakeRequest<T>(content: T): Promise<T> {
    return await new Promise((resolve) => {
      // Use a timeout to simulate http request
      setTimeout(() => resolve(content), 2000);
    });
  }

  public async register(email: string, password: string): Promise<Credential> {
    return await this.connect(email, password);
  }

  public async connect(email: string, password: string): Promise<Credential> {
    return await this.fakeRequest<Credential>({
      email: 'customer@beepshop.us',
      role: UserRole.CUSTOMER,
    });
  }

  public async edit(
    content: Partial<Credential>,
    token: string
  ): Promise<void> {
    return await this.fakeRequest<void>(undefined);
  }

  public async delete(token: string): Promise<void> {
    return await this.fakeRequest<void>(undefined);
  }
}
