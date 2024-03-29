"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todos_1 = __importDefault(require("./routes/todos"));
var cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use('/', todos_1.default);
app.listen(8000, () => {
    console.log("Server listening at port 8000");
});
module.exports = app;
