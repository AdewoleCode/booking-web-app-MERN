import UserModel from "../models/UserModel.js";

export const updateUser = async (req,res,next)=>{
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json({ message: "invalid data  or user!" });
}
}
export const deleteUser = async (req,res,next)=>{
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    return res.status(500).json({ message: "unable to delete user, something went wrong!" });
  }
}
export const getUser = async (req,res,next)=>{
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: "something went wrong!" });
  }
}
export const getUsers = async (req,res,next)=>{
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: "something went wrong!" });
  }
}