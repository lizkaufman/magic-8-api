import http from "http";
import { getAnswer } from "./controller";

const PORT: number = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");

  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

  if (req.method === "GET") {
    return getAnswer(req, res);
  }
});

server.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening`);
});
