import express from "express";
// const request = require("request");
import heroRoute from "../routes/hero";
import cors from "cors";
// const nano = require("nano")("http://127.0.0.1:5984");
import bodyParser from "body-parser";


const app = express();


app.use(bodyParser.json());

// require("dotenv").config();
app.use(cors());

// app.use((req, res, next))

app.use("/api", heroRoute);

const PORT = process.env.PORT || 4111;
app.listen(PORT, ()=>{console.log("Server don start for port: " + PORT);});


process.on("uncaughtException", function (err) {
  console.log(err);
}); 