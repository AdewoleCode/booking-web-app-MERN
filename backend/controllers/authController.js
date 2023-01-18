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

    const newUser = await UserModel.create({ username, email, password });

    if (!newUser) {
      return res.status(500).json({ message: "Unexpected Error Occured" });
    }

    const token = jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      process.env.JWT
    );

    if (newUser) {
      const { username, email, _id, isAdmin } = newUser;
      return res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(201)
        .json({ userDetails: { username, email, _id, isAdmin}});
    }
  } catch (error) {
    return res.json({ messasge: error.message });
  }
};



export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const existingUser = await UserModel.findOne({ username: username });

    if (!existingUser) {
      return res.status(404).json({ message: "No user found" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    const token = jwt.sign(
      { id: existingUser._id, isAdmin: UserModel.isAdmin },
      process.env.JWT
    );


    if (existingUser && isPasswordValid) {
        const { username, email, _id, isAdmin } = existingUser;

      return res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({messasge: "login succesfully", userDetails: { username, email, _id, isAdmin}});
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
};
