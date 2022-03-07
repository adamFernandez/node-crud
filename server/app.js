import express from 'express';
const app = express();

import cors from 'cors';

app.use(express.json());

app.use(cors());

import itemRoutes from './routes/item.js';

import './db/db.js';

app.use('/items', itemRoutes);;

app.listen(8000);

