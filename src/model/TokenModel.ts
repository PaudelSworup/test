import mongoose, { Model, ObjectId } from "mongoose";

const { ObjectId } = mongoose.Schema;

export interface IToken {
  token: string;
  userId: ObjectId;
  expiresIn: Date;
}

const tokenSchema = new mongoose.Schema<IToken>({
  token: {
    type: String,
    required: true,
  },

  userId: {
    type: ObjectId,
    ref: "USERS",
    required: true,
  },

  expiresIn: {
    type: Date,
    default: Date.now(),
  },
});

export const tokenModel: Model<IToken> = mongoose.model<IToken>(
  "token",
  tokenSchema
);
