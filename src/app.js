const express = require("express");
// const request = require("request");
const heroRoute = require("../routes/hero");
// const cors = require("cors");

const app = express();

// require("dotenv").config();
// app.use(cors());

app.use("/api", heroRoute);

const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server don start for port: " + PORT));


process.on("uncaughtException", function (err) {
  console.log(err);
}); 