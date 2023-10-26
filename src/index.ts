import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { addLog, getLogs } from './controllers/LogController';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ allowedHeaders: 'Content-Type, Cache-Control', origin: '*' }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error: ', err);
});

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓');
});

app.get('/', getLogs);
app.post('/log', addLog);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
