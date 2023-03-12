export enum UserRole {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
}

export interface Credential {
  email: string;
  role: UserRole;
  firstname?: string;
  lastname?: string;
}

export interface AuthRepository {
  register: (email: string, password: string) => Promise<Credential>;
  connect: (email: string, password: string) => Promise<Credential>;
  edit: (content: Partial<Credential>, token: string) => Promise<void>;
  delete: (token: string) => Promise<void>;
}
