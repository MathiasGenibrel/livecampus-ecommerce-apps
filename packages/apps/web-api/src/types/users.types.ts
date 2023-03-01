import { Request, Response } from 'express';

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

interface Repository {
  insert: () => Promise<void>;
}

export interface AbstractUsersController {
  usersRepository: Repository;
  exists: (email: string) => Promise<boolean>;
  alreadyExists: (email: string) => Promise<void>;
  login: (req: Request, res: Response) => Promise<Response<UserCredential>>;
  register: (req: Request, res: Response) => Promise<Response<void>>;
  edit: (req: Request, res: Response) => Promise<Response<void>>;
  delete: (req: Request, res: Response) => Promise<Response<void>>;
}
