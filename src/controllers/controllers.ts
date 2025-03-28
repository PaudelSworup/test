import express, { Request, Response } from "express";

let STATUS_CODE = 200;

export const Demo = async (req: Request, res: Response) => {
  res.status(STATUS_CODE).json({
    success: true,
    messsage: "successfully executed with cicd pielines using github actions",
  });
};
