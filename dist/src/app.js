"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const request = require("request");
const hero_1 = __importDefault(require("../routes/hero"));
const cors_1 = __importDefault(require("cors"));
// const nano = require("nano")("http://127.0.0.1:5984");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// require("dotenv").config();
app.use((0, cors_1.default)());
// app.use((req, res, next))
app.use("/api", hero_1.default);
const PORT = process.env.PORT || 4111;
app.listen(PORT, () => { console.log("Server don start for port: " + PORT); });
process.on("uncaughtException", function (err) {
    console.log(err);
});
