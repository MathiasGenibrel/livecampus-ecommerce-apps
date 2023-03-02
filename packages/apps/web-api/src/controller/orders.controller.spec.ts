import { OrdersController } from './orders.controller';
import { Request, Response } from 'express';
import {
  AbstractOrdersController,
  IOrders,
  OrdersStatus,
} from '../types/orders.types';

describe('OrdersController', () => {
  let controller: AbstractOrdersController;
  let mockReq: Partial<Request>;

  beforeEach(() => {
    controller = new OrdersController() as unknown as AbstractOrdersController;
    mockReq = {};

    controller.ordersRepository = {
      save: async () => {
        return (await Promise.resolve()) as any; // No type equal to SaveResult
      },
    };
  });

  describe('history', () => {
    it('should return a Orders list with a 200 status code', async () => {
      const expectedResponse: IOrders[] = [
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

      const result = await controller.history(
        mockReq as Request,
        mockRes as Response
      );

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(expectedResponse);
      expect(result).toEqual(expectedResponse);
    });
  });

  describe('create', () => {
    it('should return a 201 status code', async () => {
      const mockRes: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnValue(undefined),
        locals: {
          content: {
            orders_lines: [
              {
                productsId: 1,
                quantity: 12,
              },
              {
                productsId: 5,
                quantity: 1,
              },
              {
                productsId: 8,
                quantity: 2,
              },
            ],
            date_order: 1677794945723,
            usersId: 5,
          },
        },
      };
      const result = await controller.create(
        mockReq as Request,
        mockRes as Response
      );

      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.send).toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });

  describe('updateStatus', () => {
    it('should return a 204 status code', async () => {
      const mockRes: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnValue(undefined),
      };

      const result = await controller.updateStatus(
        mockReq as Request,
        mockRes as Response
      );

      expect(mockRes.status).toHaveBeenCalledWith(204);
      expect(mockRes.send).toHaveBeenCalled();
      expect(result).toBeUndefined();
    });
  });
});
