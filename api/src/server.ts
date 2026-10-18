import express from 'express';
import userRouter from './routes/user.route.ts';
import path from 'node:path';

const server = express();

server.use(express.json());

server.use('/users', userRouter);

const web = path.join(import.meta.dirname, '..', '..', 'web')

server.use(express.static(web));

server.listen(3000);
