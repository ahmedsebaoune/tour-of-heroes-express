const nano = require("nano")("http://127.0.0.1:4000");
import { Request, Response } from "express";
exports.getHeroes = async (req: Request, res: Response) => {
  const username = "admin";
  const userpass = "YOURPASSWORD";
  // // authenticate
  await nano.auth(username, userpass);

  const db = nano.use("heroes");
  const docs = await db.list({ include_docs: true });

  res.json({
    msg: docs,
  });
};

exports.getHero = async (req: Request, res: Response) => {
  const username = "admin";
  const userpass = "YOURPASSWORD";
  // // authenticate
  await nano.auth(username, userpass);

  const db = nano.use("heroes");
  const doc = await db.get(req.params.id);

  res.send({
    doc,
  });
};

exports.editHero = async (req: Request, res: Response) => {
  console.log("Got body:", req.body);

  const username = "admin";
  const userpass = "YOURPASSWORD";
  // authenticate
  await nano.auth(username, userpass);

  const db = nano.use("heroes");
  try {
    const response = await db.insert(req.body);
    res.json({ status: 200 });
  } catch (e: any) {
    res.json({ status: e.statusCode });
  }
};