import http from "http";
import { getAnswer } from "./controller";

const PORT: number = 3000;

const server = http.createServer((req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, GET",
  };

  if (req.method === "OPTIONS") {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  if (req.method === "GET") {
    res.writeHead(200, headers);
    return getAnswer(req, res);
  }
});

server.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening`);
});
