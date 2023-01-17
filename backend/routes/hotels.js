import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotelControllers.js";
const router = express.Router();

router.post("/", createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);
router.get("/find/:id", getHotel);
router.get("/find", getHotels);


export default router;
