import React from "react";

function Services() {
  return (
    <div className="service-section">
      <div className="services-card" style={{ backgroundColor: "#FFF6D9" }}>
        <img src="/figma-images/service.png" alt="Service Image" />
        <div className="text">
          <p>Free Shipping</p>
          <h3>From $99.00</h3>
        </div>
      </div>
      <div className="services-card" style={{ backgroundColor: "#FDE6E3" }}>
        <img src="/figma-images/secure.png" alt="" />
        <div className="text">
          <p>Money Gurantee</p>
          <h3>30 Days Back</h3>
        </div>
      </div>
      <div className="services-card" style={{ backgroundColor: "#F5EBFC" }}>
        <img src="/figma-images/dollar.png" alt="" />
        <div className="text">
          <p>100% Safe</p>
          <h3>Secure Shopping</h3>
        </div>
      </div>
    </div>
  );
}

export default Services;
