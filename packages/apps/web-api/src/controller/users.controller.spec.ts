import { UsersController } from './users.controller';
import { Request, Response } from 'express';
import { UserCredential } from '../types/users.types';

describe('UsersController', () => {
  let controller: UsersController;
  let mockReq: Partial<Request>;

  beforeEach(() => {
    controller = new UsersController();
    mockReq = {};
  });

  describe('login', () => {
    it('should return a UserCredential with a 200 status code', () => {
      const expectedResponse: UserCredential = {
        username: 'mathias',
        token: 'randomToken',
      };
      const mockRes: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnValue(expectedResponse),
      };

      const result = controller.login(mockReq as Request, mockRes as Response);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(expectedResponse);
      expect(result).toEqual(expectedResponse);
    });
  });

  describe('register', () => {
    it('should return a 201 status code', () => {
      const mockRes: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnValue(undefined),
      };
      const result = controller.register(
        mockReq as Request,
        mockRes as Response
      );

      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.send).toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });

  describe('edit', () => {
    it('should return a 204 status code', () => {
      const mockRes: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnValue(undefined),
      };

      const result = controller.edit(mockReq as Request, mockRes as Response);

      expect(mockRes.status).toHaveBeenCalledWith(204);
      expect(mockRes.send).toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });

  describe('delete', () => {
    it('should return a 204 status code', () => {
      const mockRes: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnValue(undefined),
      };

      const result = controller.delete(mockReq as Request, mockRes as Response);

      expect(mockRes.status).toHaveBeenCalledWith(204);
      expect(mockRes.send).toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });
});
