import React from "react";

function Hero() {
  return (
    <div>
      <div className="hero-section container">
        <div className="new-arrival-section">
          <div className="new-arrival">
            <img
              className="star"
              src="figma-images/star.png"
              alt=""
              style={{ width: "18px", height: "18px", marginTop: "20px" }}
            />
            <h5 style={{ color: "#F05A2A" }}>New Arrival</h5>
            <img
              className="star"
              src="figma-images/star.png"
              alt=""
              style={{ width: "18px", height: "18px", marginTop: "20px" }}
            />
          </div>
          <div className="hero-description">
            <h1 className="hero-heading ">
              Shop with Confidence: <br />
              Trusted Source for Quality <br /> Products
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              <br /> tellus, luctus nec ullamcorper mattis.
            </p>
            <div>
              <button className="shop-btn">Shop Now</button>
            </div>

            <div className="hero-shopping-info">
              <div className="shoping-details">
                <h3>200+</h3>
                <p>International Brands</p>
              </div>
              <div className="shoping-details">
                <h3>2000+</h3>
                <p>High-Quality Products</p>
              </div>
              <div className="shoping-details">
                <h3>3000+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="">
                <img
                  src="/figma-images/star.png"
                  alt=""
                  style={{ width: "30px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right-images">
          <img src="/figma-images/bisSale.png" alt="" className="big-sale" />
          <img
            className="big-star"
            src="/figma-images/star.png"
            alt=""
            // style={{ width: "50px", margin: "0 0 200px 200px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
