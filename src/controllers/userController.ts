import { Request, Response } from "express";
import { userModel } from "../model/AuthModel";
import bcrypt from "bcryptjs";
import { tokenModel } from "../model/TokenModel";
import { addMinutes } from "date-fns";
import { EnvStrings } from "../services";

export const createAccount = async (req: Request, res: Response) => {
  const { fullname, password } = req.body;

  let STATUS_CODE: number = 201;

  try {
    const salt = bcrypt.genSaltSync(10);
    const hash_password = bcrypt.hashSync(password, salt);

    // let users = new userModel({
    //   fullname: fullname,
    //   email: req.body.email.toLowerCase(),
    //   password: hash_password,
    // });

    // users = await users.save();

    // if (!users) {
    //   throw new Error("Something went wrong!");
    // }

    // let token = new tokenModel({
    //   token: crypto.randomUUID(),
    //   userId: users._id,
    //   expiresIn: addMinutes(Date.now(), 120),
    // });

    // token = await token.save();

    // if (!token) {
    //   throw new Error("Something went wrong!");
    // }

    // EnvStrings.sendEmail({
    //   from: "e-stotre <estorenepal@gmail.com>",
    //   to: users.email,
    //   subject: "Account creation successful",
    //   html: `
    //     <h2>Account creation successful</h2>
    //     <h2>Hello <strong>${users.fullname}</strong>, <br/></h2>
    //     <p style='font-size:20px;'>your account has been created.Activate your account to continue</p>
    //     <br>
    //     <p>your activation url is http://localhost:3030/api/auth/verify/${token.token}
    //     `,
    // });

    res.status(STATUS_CODE).json({
      success: true,
      data: {
        fullname: fullname,
        email: req.body.email.toLowerCase(),
        password: hash_password,
      },
      message: "Account created. Please activate to log in.",
    });
  } catch (err: any) {
    STATUS_CODE = 500;
    res.status(STATUS_CODE).json({
      success: false,
      error: err?.message,
    });
  }
};
