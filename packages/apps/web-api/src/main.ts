import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './database/data-source';

const bootstrap = async (): Promise<void> => {
  try {
    // Initialise sqlite database
    await AppDataSource.initialize();

    const host = process.env.HOST ?? 'localhost';
    const port = process.env.PORT ? Number(process.env.PORT) : 3000;

    const app = express();

    app.get('/', (req, res) => {
      res.send({ message: 'Hello API' });
    });

    app.listen(port, host, () => {
      console.log(`[ ready ] http://${host}:${port}`);
    });
  } catch (error) {
    console.error('CRASH APP ON INIT', error);
  }
};

bootstrap();
