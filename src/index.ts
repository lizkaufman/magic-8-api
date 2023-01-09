import http from "http";
import generateRandomAnswer from "../answers";
import { getAnswer } from "./controller";

const PORT: number = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api") {
    return getAnswer(req, res);
  }
});

server.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening`);
});
