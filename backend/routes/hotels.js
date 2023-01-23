import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
  countByCity,
  countByType,
  getHotelRooms
} from "../controllers/hotelControllers.js";

import {verifyAdmin} from "../middleware/authMiddleware.js"

const router = express.Router();

router.post("/", createHotel);
router.put("/:id",verifyAdmin, updateHotel);
router.delete("/:id",verifyAdmin, deleteHotel);
router.get("/find/:id", getHotel);
router.get("/find", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms)


export default router;
