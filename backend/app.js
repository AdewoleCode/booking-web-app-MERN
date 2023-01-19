import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();
dotenv.config()

import authRoute from "../backend/routes/auth.js"
import userRouter from "../backend/routes/users.js"
import hotelsRoute from "../backend/routes/hotels.js"
import roomsRoute from "../backend/routes/rooms.js"

app.use(cors())
app.use(express.json())
app.use(cookieParser())


app.use('/api/auth', authRoute)
app.use('/api/users', userRouter)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('connected to mongodb!');
  } catch (error) {
    throw error;
  }
};

app.listen(8000, () => {
  console.log("server listening at port8000");
  connect();
});
