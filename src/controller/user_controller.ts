import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import userModel from "../model/user_model.js";

const Auth = {
  getUser: async (req: Request, res: Response) => {
    const { username } = req.body;
    try {
      const user = await userModel.find({ username });
      res.status(200).json(user);
    } catch (err: any) {
      res.status(500);
      throw new Error(err.message);
    }
  },

  createUser: async (req: Request, res: Response) => {
    const { email, password, confirmPassword } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    const hashConfirmPass = await bcrypt.hash(confirmPassword, salt);

    const newUser = new userModel({
      email,
      password: hashPass,
      confirmPassword: hashConfirmPass,
    });

    try {
      await newUser.save();
      res.status(200).json(newUser);
    } catch (err: any) {
      res.status(500);
      throw new Error(err.message);
    }
  },

  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    } else {
      const compare = await bcrypt.compare(password, user.password);
      if (!compare) {
        res.status(404);
        throw new Error("Username or Password not correct");
      } else {
        const token = Jwt.sign({ data: user }, process.env.JWT_SECRET_KEY!, {
          expiresIn: "1h",
        });
        res.status(200).json({ user, token });
      }
    }

    try {
    } catch (err: any) {
      res.status(500);
      throw new Error(err.message);
    }
  },
};

export default Auth;
