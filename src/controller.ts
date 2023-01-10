import fs from "fs";
import path from "path";
import { ServerResponse, IncomingMessage } from "http";
import { Answer } from "./IAnswer";
import generateRandomAnswer from "../answers";

function getAnswer(req: IncomingMessage, res: ServerResponse) {
  const answer: string = generateRandomAnswer();
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ answer }));
}

export { getAnswer };
