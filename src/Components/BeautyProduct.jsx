import React from "react";
import BeautyProductData from "../projectPages/beautyProduct.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

function BeautyProduct() {
  const { beautyProducts } = BeautyProductData; // Destructure beautyProducts from JSON data

  return (
    <div className="beauty-product container-fluid">
      <div className="beauty-first-section">
        <h1 className="beauty-heading">
          50+ Beautiful & Modern <br /> Category Product
        </h1>
        <p className="beauty-product-details">
          Our designer already made a lot of beautiful <br /> prototypes of
          rooms that inspire you.
        </p>
        <div className="explore-button" style={{ padding: "11px 20px" }}>
          <button className="explore-more-button">Explore More</button>
        </div>
      </div>

      <div
        className="beauty-second-section"
        style={{ position: "relative", width: "100%", height: "500px" }}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {beautyProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <img
                src={product.image}
                alt={`Beauty Product ${product.id}`}
                // style={{ width: "100%", height: "auto" }}
                style={{
                  width:
                    product.id === 2 || product.id === 3 || product.id === 4
                      ? "430px"
                      : "100%", // Adjust width
                  height: "auto", // Maintain aspect ratio
                  marginTop: "0", // Align at the top
                  marginBottom:
                    product.id === 2 || product.id === 3 || product.id === 4
                      ? "30px"
                      : "0", // Reduce bottom margin for these images
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BeautyProduct;
