import { Request, Response } from 'express';
const LogModel = require('../models/LogModel');

export interface Log {
  passengers: number;
  fromFloor: number;
  toFloor: number;
  dateTime: Date;
}

function getLogs(req: Request, res: Response): void {
  LogModel.find()
    .then((logs: Log[]) => {
      res.status(200).json(logs);
    })
    .catch((error: Error) => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
}

function addLog(req: Request, res: Response): void {
  const { passengers, fromFloor, toFloor, dateTime } = req.body;

  const log = new LogModel({
    passengers,
    fromFloor,
    toFloor,
    dateTime: dateTime ?? new Date(),
  });

  log
    .save()
    .then((log: any) => {
      res.status(201).json(log);
    })
    .catch((error: Error) => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
}

export { addLog, getLogs };
