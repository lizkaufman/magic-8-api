import http from "http";
import { getAnswer } from "./controller";

const PORT: number = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");

  if (req.method === "OPTIONS") {
    console.log("options");
    res.end();
    return;
  }

  if (req.method === "GET") {
    console.log("get");
    console.log(res.getHeaders());
    return getAnswer(req, res);
  }
});

server.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening`);
});
