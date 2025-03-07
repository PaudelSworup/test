import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import { demoroutes } from "./routes";
import morgan from "morgan";
const app = express();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(demoroutes);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
