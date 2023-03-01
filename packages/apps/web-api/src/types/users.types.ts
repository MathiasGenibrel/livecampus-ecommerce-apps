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

export interface UsersCredentialsInput {
  email: string;
  password: string;
}

export type UsersContentInput = Pick<Users, 'id'> &
  Partial<Pick<Users, 'email' | 'password' | 'firstname' | 'lastname'>>;

export interface UsersEntity extends Users {
  /**
   * Corresponding to the address foreign key
   */
  address: number;
}

export type UserCredential = Pick<
  Users,
  'email' | 'firstname' | 'lastname' | 'role'
>;

export type UsersCredentialToken = Pick<Users, 'id' | 'email' | 'role'>;

interface Repository {
  insert: () => Promise<void>;
  createQueryBuilder: () => Promise<void>;
  update: () => Promise<void>;
  set: () => Promise<void>;
  where: () => Promise<void>;
  execute: () => Promise<void>;
}

export interface AbstractUsersController {
  usersRepository: Repository;
  exists: (email: string) => Promise<boolean>;
  alreadyExists: (email: string) => Promise<void>;
  getUser: (email: string) => Promise<Users>;
  comparePassword: (password: string, hashedPassword: string) => Promise<void>;
  login: (req: Request, res: Response) => Promise<Response<UserCredential>>;
  register: (req: Request, res: Response) => Promise<Response<void>>;
  edit: (req: Request, res: Response) => Promise<Response<void>>;
  delete: (req: Request, res: Response) => Promise<Response<void>>;
}
