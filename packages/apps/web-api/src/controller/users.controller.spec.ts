import { UsersController } from './users.controller';
import { Request, Response } from 'express';
import { AbstractUsersController, UserCredential } from '../types/users.types';

describe('UsersController', () => {
  // Use an abstraction to test only business code
  let controller: AbstractUsersController;
  let mockReq: Partial<Request>;

  beforeEach(() => {
    controller = new UsersController() as unknown as AbstractUsersController;

    // Abstract method from controller
    controller.alreadyExists = async () => {};
    controller.usersRepository = {
      insert: async () => {},
    };

    mockReq = {};
  });

  describe('login', () => {
    it('should return a UserCredential with a 200 status code', async () => {
      const expectedResponse: UserCredential = {
        username: 'mathias',
        token: 'randomToken',
      };

      const mockRes: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnValue(expectedResponse),
      };

      const result = await controller.login(
        mockReq as Request,
        mockRes as Response
      );

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(expectedResponse);
      expect(result).toEqual(expectedResponse);
    });
  });

  describe('register', () => {
    it('should return a 201 status code', async () => {
      const mockRes: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnValue(undefined),
        locals: {
          usersCredential: {
            email: 'mathias.geni@gmail.com',
            password: 'longPassword98!',
          },
        },
      };

      const result = await controller.register(
        mockReq as Request,
        mockRes as Response
      );

      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.send).toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });

  describe('edit', () => {
    it('should return a 204 status code', async () => {
      const mockRes: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnValue(undefined),
      };

      const result = await controller.edit(
        mockReq as Request,
        mockRes as Response
      );

      expect(mockRes.status).toHaveBeenCalledWith(204);
      expect(mockRes.send).toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });

  describe('delete', () => {
    it('should return a 204 status code', async () => {
      const mockRes: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnValue(undefined),
      };

      const result = await controller.delete(
        mockReq as Request,
        mockRes as Response
      );

      expect(mockRes.status).toHaveBeenCalledWith(204);
      expect(mockRes.send).toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });
});
