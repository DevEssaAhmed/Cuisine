import React from 'react'
import "./LandingPage.scss"

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='landing-page_heading'>
        <h1>Cuisine</h1>
        <p>
          Discover the best local restaurants in your area and enjoy delicious,
          freshly-prepared meals delivered straight to your door with Cuisine -
          the ultimate food delivery experience.
        </p>
        <div>
          <button>Explore</button>
          <button>About Us</button>
        </div>
      </div>
      {/* <div className='landing-page_img'>
        <img src={HeaderImg} alt='' />
      </div> */}
    </div>
  );
}

export default LandingPage