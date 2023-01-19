import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!email || !password || !username) {
      return res
        .status(422)
        .json({ message: "please provide username, email and password" });
    }

    const existingEmail = await UserModel.findOne({ email });

    if (existingEmail) {
      return res
        .status(422)
        .json({ message: "email already used, use another email" });
    }

    const user = await (await UserModel.create({ username, email, password })).save();

    if (!user) {
      return res.status(500).json({ message: "Unexpected Error Occured" });
    }


    const token = jwt.sign({ id:user._id, isAdmin:user.isAdmin }, process.env.JWT, {
      expiresIn: "30d"})

    res.cookie("token", token, {
      // path: "/",
      httpOnly: true,
      // expiresIn: new Date(Date.now() + 1000 * 86400),
      // sameSite: "none",
      // security: true,
    });

    if (user) {
      const { username, email, _id, isAdmin } = user;
      res.status(201).json({ userDetails: { username, email, _id, isAdmin } });
    }
  } catch (error) {
    return res.json({ messasge: error.message });
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username: username });

    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    const token = jwt.sign({ id:user._id, isAdmin:user.isAdmin }, process.env.JWT, {
      expiresIn: "30d"})

    if (user && isPasswordValid) {
      const { username, email, _id, isAdmin } = existingUser;

      return res
        .cookie("token", token, {
          httpOnly: true,
          // expiresIn: new Date(Date.now() + 1000 * 86400),
        })
        .status(200)
        .json({
          messasge: "login succesfully",
          userDetails: { username, email, _id, isAdmin },
        });
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
};
