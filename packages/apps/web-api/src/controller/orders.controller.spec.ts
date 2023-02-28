import { OrdersController } from './orders.controller';
import { Request, Response } from 'express';
import { OrdersStatus } from '../types/orders.types';

describe('OrdersController', () => {
  let controller: OrdersController;
  let mockReq: Partial<Request>;

  beforeEach(() => {
    controller = new OrdersController();
    mockReq = {};
  });

  describe('history', () => {
    it('should return a Orders list with a 200 status code', () => {
      const expectedResponse = [
        {
          id: 1,
          date_order: 1677612786,
          status: OrdersStatus.VALIDATED,
        },
        {
          id: 2,
          date_order: 1675654797,
          status: OrdersStatus.PAID,
        },
      ];

      const mockRes: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnValue(expectedResponse),
      };

      const result = controller.history(
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
      const mockRes: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnValue(undefined),
      };
      const result = controller.create(mockReq as Request, mockRes as Response);

      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.send).toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });

  describe('updateStatus', () => {
    it('should return a 204 status code', () => {
      const mockRes: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnValue(undefined),
      };

      const result = controller.updateStatus(
        mockReq as Request,
        mockRes as Response
      );

      expect(mockRes.status).toHaveBeenCalledWith(204);
      expect(mockRes.send).toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });
});
