const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    path: "/",
  });
});

router.get("/hello", (req, res) => {
  res.json({
    path: "/hello",
  });
});

app.use("/", router);

module.exports.handler = serverless(app);
