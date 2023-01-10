import http from "http";
import { getAnswer } from "./controller";

const PORT: number = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
    return getAnswer(req, res);
  }
});

server.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening`);
});
