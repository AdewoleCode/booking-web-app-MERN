import HotelModel from "../models/HotelModel.js";

export const createHotel = async (req, res, next) => {
  console.log(req.body);
  const newHotel = await new HotelModel(req.body).save();

  try {
    res.status(200).json(newHotel);
  } catch (err) {
    return res.json({ message: "could not create hotel!" });
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
    return res.json({ message: "could not update hotel!" });
  }
};
export const deleteHotel = async (req, res, next) => {
  try {
    await HotelModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    return res.json({ message: "could not delete hotel!" });
  }
};
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await HotelModel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    return res.json({ message: "could not find any hotels!" });
  }
};
export const getHotels = async (req, res, next) => {
  try {
    const hotels = await HotelModel.find({})
    res.status(200).json(hotels);
  } catch (err) {
    return res.json({ message: "could not find any hotels!" });
  }
};


export const countByCity = async (req, res) => {
  const cities = req.query.cities.split(",");
  // console.log(cities);
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return HotelModel.countDocuments({ city: city });
        // return Hotel.find({ city: city }).length;
      })
    );
    res.status(200).json(list);
  } catch (err) {
    return res.json({ message: "could not fetch hotel counts!" });
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await HotelModel.countDocuments({ type: "hotels" });
    const apartmentCount = await HotelModel.countDocuments({ type: "apartments" });
    const resortCount = await HotelModel.countDocuments({ type: "resorts" });
    const villaCount = await HotelModel.countDocuments({ type: "villas" });
    const cabinCount = await HotelModel.countDocuments({ type: "cabins" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    return res.json({ message: "could not fetch hotel counts!" });
  }
};
