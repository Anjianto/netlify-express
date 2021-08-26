import express from "express";
import serverless from "serverless-http";

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

const handler = serverless(app as any);

export { handler };
