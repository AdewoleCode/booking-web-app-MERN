import "./FeaturedList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { countByPropertyRoute } from "../../apiRoutes/routes";


const FeaturedList = () => {


  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData(countByPropertyRoute)
  }, [])

  const fetchData = async (url) => {
    setLoading(true)
    await axios.get(url).then((res) => {
      setData(res.data)
      setLoading(false)
    })
  }
  return (

    <div className="p-type-con">
      <h3>Featured properties</h3>

      <div className="fp">
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Eko Hotel And Suites</span>
          <span className="fpCity">Lagos</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Comfort Suites Airport</span>
          <span className="fpCity">Lagos</span>
          <span className="fpPrice">Starting from $140</span>
          <div className="fpRating">
            <button>9.3</button>
            <span>Exceptional</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://www.thecable.ng/wp-content/uploads/2022/10/capital-hotels-Sheraton-Abuja-Hotel.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Sheraton Seasons Hotel</span>
          <span className="fpCity">Port Harcourt</span>
          <span className="fpPrice">Starting from $99</span>
          <div className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Hilton Garden Inn</span>
          <span className="fpCity">Abuja</span>
          <span className="fpPrice">Starting from $105</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedList;