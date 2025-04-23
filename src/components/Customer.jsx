import React from 'react';
import img from '../images/test1.jpg.png';

const CustomerReviews = () => {
    return (
      <div className="customer-reviews">
        <div className="reviews-header">
          <h2>What our customers say</h2>
          <p className="rating-summary">
            Rated 4.7 / 5 based on 28,370 reviews
            <span> Showing our 4 & 5 star reviews</span>
          </p>
        </div>
  
        <div className="review-box">
          <div className="review-image">
            <img src={img} alt="Ali Tufan" />
            <button className="nav-button">‹</button>
          </div>
  
          <div className="review-details">
            <div className="review-rating">
              <span className="stars">★★★★★</span>
              <span className="score">5.0</span>
            </div>
  
            <h4 className="customer-name">Ali TUFAN</h4>
            <p className="customer-title">Designer</p>
  
            <p className="customer-quote">
              I’d suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CustomerReviews;