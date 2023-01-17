import HotelModel from "../models/HotelModel.js";
import { createError } from "../utils/error.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new HotelModel(req.body);

  try {
    const savedHotel = await newHotel;
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await HotelModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};
export const deleteHotel = async (req, res, next) => {
  try {
    await HotelModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await HotelModel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};
export const getHotels = async (req, res, next) => {
  try {
    const hotels = await HotelModel.find({aa})
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};