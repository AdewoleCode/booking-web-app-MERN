import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import HotelList from "./pages/hotelList/HotelList";
import Hotel from "./pages/hotel/Hotel";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector(state=> state.auth.user)
  console.log(user);
  console.log(localStorage.getItem('user'))

  console.log()
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
