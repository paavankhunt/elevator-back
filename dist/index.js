"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const LogController_1 = require("./controllers/LogController");
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use((0, cors_1.default)({ allowedHeaders: 'Content-Type, Cache-Control', origin: '*' }));
app.use(body_parser_1.default.json());
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
mongoose_1.default.connect(process.env.MONGO_URL);
mongoose_1.default.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose_1.default.connection.on('error', (err) => {
    console.error('MongoDB connection error: ', err);
});
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
app.get('/', LogController_1.getLogs);
app.post('/log', LogController_1.addLog);
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map