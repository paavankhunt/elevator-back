"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogs = exports.addLog = void 0;
const LogModel = require('../models/LogModel');
function getLogs(req, res) {
    LogModel.find()
        .then((logs) => {
        res.status(200).json(logs);
    })
        .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    });
}
exports.getLogs = getLogs;
function addLog(req, res) {
    const { passengers, fromFloor, toFloor, dateTime } = req.body;
    const log = new LogModel({
        passengers,
        fromFloor,
        toFloor,
        dateTime: dateTime !== null && dateTime !== void 0 ? dateTime : new Date(),
    });
    log
        .save()
        .then((log) => {
        res.status(201).json(log);
    })
        .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    });
}
exports.addLog = addLog;
//# sourceMappingURL=LogController.js.map