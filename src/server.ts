import express from 'express';
import cors from 'cors';
import path from 'path';
import 'express-async-errors';

import routes from './routes';
import errorHandler from './errors/handler';

import './database/connection';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(3333, () => {
  console.log('Server started!');
});