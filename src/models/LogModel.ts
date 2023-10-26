import mongoose from 'mongoose';

export interface Log {
  passengers: number;
  fromFloor: number;
  toFloor: number;
  dateTime: Date;
}

const LogSchema = new mongoose.Schema({
  passengers: { type: Number, required: true },
  fromFloor: { type: Number, required: true },
  toFloor: { type: Number, required: true },
  dateTime: { type: Date, default: Date.now },
});

const LogModel = mongoose.model('Log', LogSchema);

module.exports = LogModel;
