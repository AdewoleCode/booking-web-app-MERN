import "./Hotel.css";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import ReserveModal from "../../components/reserveModal/ReserveModal";


const Hotel = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)

  const id = location.pathname.split("/")[2]

  const getSingleRouteUrl = `http://localhost:8000/api/hotels/find/${id}`

  const date = useSelector(state => state.search.date)
  const options = useSelector(state => state.search.options)
  const user = useSelector(state=> state.auth.user)


  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(date[0].endDate, date[0].startDate);


  useEffect(() => {
    fetchData(getSingleRouteUrl)
  }, [getSingleRouteUrl])

  const fetchData = async (url) => {
    setLoading(true)
    await axios.get(url).then((res) => {
      setData(res.data)
      setLoading(false)
    })
  }
  const handleClick = () => {
    if (user){
      setModal(true)

    }else {
      navigate('/login')
    }
  }


  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      {
        loading ? (
          "loading please wait.."
        ) : (
          <>
            {
              <div className="hotelContainer">
                {open && (
                  <div className="slider">
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className="close"
                      onClick={() => setOpen(false)}
                    />
                    <FontAwesomeIcon
                      icon={faCircleArrowLeft}
                      className="arrow"
                      onClick={() => handleMove("l")}
                    />
                    <div className="sliderWrapper">
                      <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon
                      icon={faCircleArrowRight}
                      className="arrow"
                      onClick={() => handleMove("r")}
                    />
                  </div>
                )}
                <div className="hotelWrapper">
                  <button onClick={handleClick} className="bookNow">Reserve or Book Now!</button>
                  <h1 className="hotelTitle">{data?.name}</h1>
                  <div className="hotelAddress">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>{data?.address}</span>
                  </div>
                  <span className="hotelDistance">
                  {data?.distance}
                  </span>
                  <span className="hotelPriceHighlight">
                    Book a stay over ${data?.cheapestPrice} at this property and get a free airport taxi
                  </span>
                  <div className="hotelImages">
                    {photos?.map((photo, i) => (
                      <div className="hotelImgWrapper" key={i}>
                        <img
                          onClick={() => handleOpen(i)}
                          src={photo.src}
                          alt=""
                          className="hotelImg"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="hotelDetails">
                    <div className="hotelDetailsTexts">
                      <h1 className="hotelTitle">{data?.title}</h1>
                      <p className="hotelDesc">
                        {data?.desc}
                        {/* Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                        Street Apartments has accommodations with air conditioning and
                        free WiFi. The units come with hardwood floors and feature a
                        fully equipped kitchenette with a microwave, a flat-screen TV,
                        and a private bathroom with shower and a hairdryer. A fridge is
                        also offered, as well as an electric tea pot and a coffee
                        machine. Popular points of interest near the apartment include
                        Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                        airport is John Paul II International Kraków–Balice, 16.1 km
                        from Tower Street Apartments, and the property offers a paid
                        airport shuttle service. */}
                      </p>
                    </div>
                    <div className="hotelDetailsPrice">
                      <h1>Perfect for a {days}-night stay!</h1>
                      <span>
                        Located in the real heart of Krakow, this property has an
                        excellent location score of 9.8!
                      </span>
                      <h2>
                        <b>${days && days * data?.cheapestPrice * options.room}</b> ({days ? days : null} nights)
                      </h2>
                      <button onClick={handleClick}>Reserve or Book Now!</button>
                    </div>
                  </div>
                </div>
                <MailList />
                <Footer />
              </div>
            }
          </>
        )
      }
      {modal && <ReserveModal setModal={setModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;