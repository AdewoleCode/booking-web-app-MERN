import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config()

import authRoute from "../backend/routes/auth.js"
import usersRoute from "../backend/routes/users.js"
import hotelsRoute from "../backend/routes/hotels.js"
// import roomsRoute from "../backend/routes/rooms.js"


app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
// app.use('/api/rooms', roomsRoute)

app.use((err, req, res, next) => {
    console.log(err);
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });



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
