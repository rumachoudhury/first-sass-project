import BeautyProductData from "../projectPages/beautyProduct.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function BeautyProduct() {
  const { beautyProducts } = BeautyProductData; // Destructure beautyProducts from JSON data

  return (
    <div className="beauty-product">
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

      <div className="beauty-second-section">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={50}
          navigation={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          // spaceBetween={20}
          // slidesPerView={3}
          // navigation={true}
          // navigation={{
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev",
          // }}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // centeredSlides={true} // To keep the active slide centered
        >
          {beautyProducts.map((product, index) => (
            <SwiperSlide
              key={product.id}
              className={index === 0 ? "first-slide active-slide" : ""}
            >
              <img src={product.image} alt={`Beauty Product ${product.id}`} />
              <p> {product.scale}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div> */}
      </div>
    </div>
  );
}

export default BeautyProduct;
