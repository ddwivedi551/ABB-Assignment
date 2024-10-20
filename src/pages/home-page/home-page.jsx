import React from 'react';
import ProductListing from '../../components/product-listing/product-listing';

import './home-page.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className='hero-sub-section'>
          <div className="hero-text">
            <h1>Your Gateway to Extraordinary Finds</h1>
            <p>Unlock deals, bid smart, and seize the moment with our online bidding bonanza!</p>
            <button className="watch-video-button">Watch Video</button>
          </div>
          <div className="explore-section">
            <span className='heading'>Explore<span className='heading-color'> Auctions</span> </span>
          </div>
        </div>
        <div className="hero-image">
          <img src="hero-image.jpg" alt="Extraordinary Finds" />
        </div>
      </div>

      <div>
        <ProductListing />
      </div>
    </div>
  );
}

export default HomePage;
