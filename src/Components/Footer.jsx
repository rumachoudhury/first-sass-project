import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-top-section">
        <div className="footer-heading">
          <img src="/figma-images/footer.png" alt="Footer Logo" />
          <div>
            <p>techserve4u@gmail.com</p>
            <p>+123-589-9763</p>
            <p>King Street, Melbourne,</p>
            <p>Australia</p>
          </div>
        </div>

        <div className="categories-counter">
          <h2 style={{ color: "#000000", fontSize: "24px" }}>Categories</h2>
          <ul className="categories-list">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/resources">Resources</a>
            </li>
            {/* <li>About Us</li>
            <li>Shop</li>
            <li>Contact Us</li>
            <li>Resources</li> */}
          </ul>
        </div>
        <div className="account-counter">
          <h2 style={{ color: "#000000", fontSize: "24px" }}>My Account</h2>
          <ul className="account-list">
            <li>
              <a href="/support">Support</a>
            </li>
            <li>
              <a href="/quotes">Your Quotes</a>
            </li>
            <li>
              <a href="/track-order">Track Your Order</a>
            </li>
            {/* <li>Support</li>
            <li>Your Quotes</li>
            <li>Track your Order</li> */}
          </ul>
        </div>
        <div className="follow-us-counter">
          <h2 style={{ color: "#000000", fontSize: "24px" }}>Follow Us</h2>
          <p>
            It is a long established fact that a <br /> reader will be
            distracted by <br /> the readable <br /> looking at its layout.
          </p>
          <div className="footer-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      {/*bottom section start */}
      <div className="footer-bottom-section">
        <h3 className="all-right">
          2024. All right reserved design by techserve4u
        </h3>
        <div className="privacy-counter" style={{ fontSize: "14px" }}>
          <a href="/privacy">Setting & Privacy</a>
          <a href="/faqs">FAQs</a>
          <a href="/services">Services</a>
          {/* <p>Setting & Privacy</p>
          <p>Faqs</p>
          <p>Services</p> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
