export enum UsersRoles {
  CUSTOMER = 'customer',
  ADMIN = 'admin',
}

interface Users {
  id: number;
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
  role: UsersRoles;
}

export interface UsersCreationInput {
  email: string;
  password: string;
}

export interface UsersEntity extends Users {
  /**
   * Corresponding to the address foreign key
   */
  address: number;
}

export interface UserCredential {
  username: string;
  token: string;
}
