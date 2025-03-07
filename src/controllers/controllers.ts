import express, { Request, RequestHandler, Response } from "express";
export const Demo = async (req: Request, res: Response) => {
  res.status(200).json({ success: true, messsage: "successful" });
};
