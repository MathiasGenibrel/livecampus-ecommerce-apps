import { Request, Response } from 'express';
import { UserCredential } from './users.types';
import { Users } from '../database/entity/Users';
import { Repository } from 'typeorm';

export interface ProductsEntity {
  id: number;
  name: string;
  description: string;
  image_link: string;
  price: number;
}

export interface AbstractProductsController {
  repository: Partial<Repository<unknown>>;
  find: (req: Request, res: Response) => Promise<boolean>;
  findOne: (req: Request, res: Response) => Promise<void>;
  create: (req: Request, res: Response) => Promise<Users>;
  edit: (req: Request, res: Response) => Promise<void>;
  delete: (req: Request, res: Response) => Promise<Response<UserCredential>>;
}

export interface ProductsParams {
  id: number;
}
