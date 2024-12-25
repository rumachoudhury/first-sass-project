import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import productData from "../projectPages/featuredProduct.json";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

function FeaturedProducts() {
  const { products } = productData; // Destructure products from the JSON data

  return (
    <div className="product-counter  container">
      <h1 className="feature-title">Featured Products</h1>

      <div className="product-details">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30} // Adjust spacing
          slidesPerView={4} // Number of cards per view
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product">
                <div className="product-card">
                  <div className="feature-images">
                    <img src="/figma-images/heart.png" alt="Heart Icon" />
                    <img
                      src="/figma-images/25%.png"
                      alt="Discount Badge"
                      className="discount-image"
                    />
                  </div>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="product-img"
                  />
                  <p className="product-title">{product.title}</p>
                  <div className="price">
                    <p className="product-price">{product.price}</p>
                    <p className="product-discount">{product.discountPrice}</p>
                    <div className="product-rating">
                      <img src="/figma-images/raiting-star.png" alt="" />
                      <p>({product.rating})</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FeaturedProducts;

// Navigation: Adds "next" and "previous" buttons for slide navigation.
// Pagination: Displays pagination indicators, such as bullets or fractions, to represent each slide.
// Scrollbar: Provides a draggable scrollbar for slide navigation.
// A11y (Accessibility): Enhances accessibility features, making the slider more usable for individuals with disabilities.
