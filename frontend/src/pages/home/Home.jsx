import React from 'react'
import "./Home.css"
import IMG1 from '../../assets/booking-img1.jpg'
import IMG2 from '../../assets/booking-image4.jpg'
import IMG3 from '../../assets/booking-img2.jpg'



const Home = () => {
  return (
    <div className='home'>
      <div className="home-hero">
        <div className="home-text">
          <h2>
            A lifetime of discounts? <span>It's Genius!</span>
          </h2>
          <p>
            Get rewarded for your travels. unlock instant savings of
            10% or more with a free AdewoleBookings.com account!
          </p>
          <button className="home-btn">sign in/Register</button>
        </div>
        <div className="home-img">
          <div className="image image-1">
            <img src={IMG1} alt="" />
          </div>
          <div className="image image-2">
            <img src={IMG2} alt="" />
          </div>
          <div className="image image-3">
            <img src={IMG3} alt="" />
          </div>
        </div>
      </div>
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>

    </div>
  )
}

export default Home