import { ProductsController } from './products.controller';
import { Request, Response } from 'express';
import { Product } from '../types/products.types';

describe('ProductsController', () => {
  let controller: ProductsController;
  let mockReq: Partial<Request>;
  let mockDefaultRes: Partial<Response>;
  const expectedResponse: Product = {
    id: 1,
    name: 'Airpods',
    price: 189,
    description: 'Wireless Headphone',
    image_link: 'http://localhost:3000/public/imgs/nameofimg123456',
  };

  beforeEach(() => {
    controller = new ProductsController();
    mockReq = {};
    mockDefaultRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnValue(undefined),
    };
  });

  describe('find', () => {
    it('should return a UserCredential with a 200 status code', () => {
      const mockRes: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnValue([expectedResponse]),
      };

      const result = controller.find(mockReq as Request, mockRes as Response);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith([expectedResponse]);
      expect(result).toEqual([expectedResponse]);
    });
  });

  describe('findOne', () => {
    it('should return a 201 status code', () => {
      const mockRes: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnValue(expectedResponse),
      };
      const result = controller.findOne(
        mockReq as Request,
        mockRes as Response
      );

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(expectedResponse);
      expect(result).toEqual(expectedResponse);
    });
  });

  describe('create', () => {
    it('should return a 201 status code', () => {
      const result = controller.create(
        mockReq as Request,
        mockDefaultRes as Response
      );

      expect(mockDefaultRes.status).toHaveBeenCalledWith(201);
      expect(mockDefaultRes.send).toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });

  describe('edit', () => {
    it('should return a 204 status code', () => {
      const result = controller.edit(
        mockReq as Request,
        mockDefaultRes as Response
      );

      expect(mockDefaultRes.status).toHaveBeenCalledWith(204);
      expect(mockDefaultRes.send).toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });

  describe('delete', () => {
    it('should return a 204 status code', () => {
      const result = controller.delete(
        mockReq as Request,
        mockDefaultRes as Response
      );

      expect(mockDefaultRes.status).toHaveBeenCalledWith(204);
      expect(mockDefaultRes.send).toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });
});
