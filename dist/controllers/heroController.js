"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nano = require("nano")("http://127.0.0.1:5984");
exports.getHeroes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = "ahmed";
    const userpass = "ahmed";
    // // authenticate
    yield nano.auth(username, userpass);
    const db = nano.use("heroes");
    const docs = yield db.list({ include_docs: true });
    res.json({
        msg: docs,
    });
});
exports.getHero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = "ahmed";
    const userpass = "ahmed";
    // // authenticate
    yield nano.auth(username, userpass);
    const db = nano.use("heroes");
    const doc = yield db.get(req.params.id);
    res.send({
        doc,
    });
});
exports.editHero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Got body:", req.body);
    const username = "ahmed";
    const userpass = "ahmed";
    // authenticate
    yield nano.auth(username, userpass);
    const db = nano.use("heroes");
    try {
        const response = yield db.insert(req.body);
        res.sendStatus(204);
    }
    catch (e) {
        res.sendStatus(e.statusCode);
    }
});
