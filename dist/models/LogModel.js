"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const LogSchema = new mongoose_1.default.Schema({
    passengers: { type: Number, required: true },
    fromFloor: { type: Number, required: true },
    toFloor: { type: Number, required: true },
    dateTime: { type: Date, default: Date.now },
});
const LogModel = mongoose_1.default.model('Log', LogSchema);
module.exports = LogModel;
//# sourceMappingURL=LogModel.js.map