import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());

app.listen(() => {
  console.log(`server listening on ${PORT}`);
});
