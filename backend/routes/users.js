import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/userControllers.js";

import { 
  verifyAdmin, 
  verifyUser,
 } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.route('/').get(verifyAdmin, getUsers)
userRouter.route('/:id').get(verifyUser, getUser)
userRouter.route('/:id').delete(verifyUser, deleteUser)
userRouter.route('/:id').put(verifyUser, updateUser)


export default userRouter;
