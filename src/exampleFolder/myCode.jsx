import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import productData from "../projectPages/featuredProduct.json";
import "swiper/scss";

function FeaturedProducts() {
  const { products } = productData; // Destructure products from the JSON data

  return (
    <div className="product-counter  container">
      <h1 className="feature-title">Featured Products</h1>

      <div className="product-details">
        <Swiper
          spaceBetween={10} // Adjust spacing
          slidesPerView={4} // Number of cards per view
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
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
                  {/* <p className="product-rating">⭐ ({product.rating})</p> */}
                  <div className="product-rating">
                    <img src="public/figma-images/raiting-star.png" alt="" />
                    <p>({product.rating})</p>
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

//____________________________________________________________________//
// import React from "react";
// import { FaShareAlt, FaExchangeAlt, FaHeart } from "react-icons/fa";

// function TrendyProduct() {
//   return (
//     <div className="super-product">
//       <h1 className="trendy-heading">Super Trendy Product</h1>
//       <div className="card-main-parent">
//         <div className="card-body">
//           <div className="image-container">
//             <img
//               src="/figma-images/living.png"
//               alt="Product Image"
//               className="living-image"
//             />
//             <img
//               src="/figma-images/25%.png"
//               alt="25% Off Badge"
//               className="badge"
//             />
//             <button className="add-to-cart">Add to Cart</button>
//             <div className="action-items">
//               <div className="action-item">
//                 <FaShareAlt className="icon" />
//                 <span>Share</span>
//               </div>
//               <div className="action-item">
//                 <FaExchangeAlt className="icon" />
//                 <span>Compare</span>
//               </div>
//               <div className="action-item">
//                 <FaHeart className="icon" />
//                 <span>Like</span>
//               </div>
//             </div>
//             <div className="card-footer">
//               <h3 className="card-footer-title" style={{ color: "#FFFFFF" }}>
//                 Respira
//               </h3>
//               <p style={{ color: "#FFFFFFB2" }}>Outdoor bar table and stool</p>
//               <div className="price-details">
//                 <h3>$2.500.000</h3>
//                 <p className="previous-price">$3.500.000</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card-body">
//           <div className="image-container">
//             <img
//               src="public/figma-images/headphone.png"
//               alt="Product Image"
//               className="living-image"
//             />
//             <img
//               src="/figma-images/25%.png"
//               alt="25% Off Badge"
//               className="badge"
//             />
//             <div className="card-footer">
//               <h3 className="card-footer-title" style={{ color: "#FFFFFF" }}>
//                 Respira
//               </h3>
//               <p style={{ color: "#FFFFFFB2" }}>Outdoor bar table and stool</p>
//               <div className="price-details">
//                 <h3>$2.500.000</h3>
//                 <p className="previous-price">$3.500.000</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="card-body">
//           <div className="image-container">
//             <img
//               src="public/figma-images/laptop.png"
//               alt="Product Image"
//               className="living-image"
//             />
//             <img
//               src="/figma-images/25%.png"
//               alt="25% Off Badge"
//               className="badge"
//             />
//             <div className="card-footer">
//               <h3 className="card-footer-title" style={{ color: "#FFFFFF" }}>
//                 Respira
//               </h3>
//               <p style={{ color: "#FFFFFFB2" }}>Outdoor bar table and stool</p>
//               <div className="price-details">
//                 <h3>$2.500.000</h3>
//                 <p className="previous-price">$3.500.000</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card-body">
//           <div className="image-container">
//             <img
//               src="public/figma-images/Image(10).png"
//               alt="Product Image"
//               className="living-image"
//             />
//             <img
//               src="/figma-images/25%.png"
//               alt="25% Off Badge"
//               className="badge"
//             />
//             <div className="card-footer">
//               <h3 className="card-footer-title" style={{ color: "#FFFFFF" }}>
//                 Respira
//               </h3>
//               <p style={{ color: "#FFFFFFB2" }}>Outdoor bar table and stool</p>
//               <div className="price-details">
//                 <h3>$2.500.000</h3>
//                 <p className="previous-price">$3.500.000</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card-body">
//           <div className="image-container">
//             <img
//               src="public/figma-images/graysweats.png"
//               alt="Product Image"
//               className="living-image"
//             />
//             <img
//               src="/figma-images/25%.png"
//               alt="25% Off Badge"
//               className="badge"
//             />
//             <div className="card-footer">
//               <h3 className="card-footer-title" style={{ color: "#FFFFFF" }}>
//                 Respira
//               </h3>
//               <p style={{ color: "#FFFFFFB2" }}>Outdoor bar table and stool</p>
//               <div className="price-details">
//                 <h3>$2.500.000</h3>
//                 <p className="previous-price">$3.500.000</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card-body">
//           <div className="image-container">
//             <img
//               src="public/figma-images/living2.png"
//               alt="Product Image"
//               className="living-image"
//             />
//             <img
//               src="/figma-images/25%.png"
//               alt="25% Off Badge"
//               className="badge"
//             />
//             <div className="card-footer">
//               <h3 className="card-footer-title" style={{ color: "#FFFFFF" }}>
//                 Respira
//               </h3>
//               <p style={{ color: "#FFFFFFB2" }}>Outdoor bar table and stool</p>
//               <div className="price-details">
//                 <h3>$2.500.000</h3>
//                 <p className="previous-price">$3.500.000</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card-body">
//           <div className="image-container">
//             <img
//               src="public/figma-images/exercise.png"
//               alt="Product Image"
//               className="exercise-image"
//             />
//             <img
//               src="/figma-images/25%.png"
//               alt="25% Off Badge"
//               className="badge exercise"
//               style={{ marginTop: "100px" }}
//             />
//             <div className="card-footer">
//               <h3 className="card-footer-title" style={{ color: "#FFFFFF" }}>
//                 Respira
//               </h3>
//               <p style={{ color: "#FFFFFFB2" }}>Outdoor bar table and stool</p>
//               <div className="price-details">
//                 <h3>$2.500.000</h3>
//                 <p className="previous-price">$3.500.000</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card-body">
//           <div className="image-container">
//             <img
//               src="public/figma-images/phone2.png"
//               alt="Product Image"
//               className="living-image"
//             />
//             <img
//               src="/figma-images/25%.png"
//               alt="25% Off Badge"
//               className="badge"
//             />
//             <div className="card-footer">
//               <h3 className="card-footer-title" style={{ color: "#FFFFFF" }}>
//                 Respira
//               </h3>
//               <p style={{ color: "#FFFFFFB2" }}>Outdoor bar table and stool</p>
//               <div className="price-details">
//                 <h3>$2.500.000</h3>
//                 <p className="previous-price">$3.500.000</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <button
//         className="end-btn"
//         style={{
//           padding: "10px 15px",
//           backgroundColor: "#355BFB",
//           color: "white",
//           borderRadius: "10px",
//           border: "none",
//         }}
//       >
//         View More
//       </button>
//     </div>
//   );
// }

// export default TrendyProduct;
//________________________________________________________________//
//scss style
// //@import "../variables";
// @import "../mixins";

// .trendy-heading {
//   font-size: 40px;
//   color: #3a3a3a;
//   font-family: $poppins;
// }

// .card-main-parent {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   flex-wrap: wrap;
//   gap: 15px;
//   width: 100%;
//   max-width: 1400px;
//   margin-top: 50px;

//   //   border: 2px solid transparent; // Default border is transparent
//   //   transition: border 0.3s ease, transform 0.3s ease; // Ensure transition is applied to both properties

//   //   .card-body:hover {
//   //     border: 2px solid purple;
//   //     transform: scale(1.05);
//   //   }
//   .card-body {
//     //1st parent
//     position: relative;
//     // top: 40px;
//     bottom: 40px;
//     width: 350px;
//     height: 600px;
//     overflow: hidden;
//     border-radius: 8px;
//     background-color: #fff;
//     display: flex;
//     flex-direction: column;

//     .card-body:hover {
//       border: 2px solid purple;
//       transform: scale(1.05);
//     }

//     .image-container {
//       // 2nd parena
//       position: relative;
//       width: 100%;
//       height: 75%;
//       // height: auto;

//       .living-image {
//         width: 100%;
//         display: block;
//       }

//       .badge {
//         position: absolute;
//         top: 10px;
//         right: 0;
//         width: 100px;
//         height: auto;
//         z-index: 2;
//       }

//       .add-to-cart {
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         background-color: white;
//         color: red;
//         padding: 10px 20px;
//         border: none;
//         border-radius: 5px;
//         cursor: pointer;
//         z-index: 2;
//         opacity: 1; // Ensure the button is always visible
//       }

//       .action-items {
//         position: absolute;
//         bottom: 50px;
//         top: 60%;
//         left: 40%;
//         transform: translateX(-50%);
//         display: flex;
//         //   gap: 5px;
//         z-index: 2;
//         width: 200px;
//         height: 24px;
//         font-size: 14px;
//       }

//       .action-item {
//         display: flex;
//         align-items: center;
//         padding: 8px 12px;
//         //   color: $text-color;
//         color: #ffffff;
//         border: none;
//         border-radius: 4px;
//         cursor: pointer;
//         transition: background-color 0.3s;
//         margin-bottom: 50px;
//         .icon {
//           margin-right: 5px;
//         }
//       }
//       .card-footer {
//         background-color: #2f2f2f;
//         display: flex;
//         flex-direction: column;
//         justify-content: flex-start;
//         align-items: flex-start;
//         color: #ffffff;
//         padding: 10px;
//         margin-top: 0;
//         flex-grow: 0;

//         .price-details {
//           display: flex;
//           // justify-content: space-around;
//           gap: 10px;
//         }
//         .previous-price {
//           text-decoration: line-through;
//           padding-top: 5px;
//           color: #ffffffb2;
//         }
//       }
//     }
//     //   .card-body {
//     //     border: 2px solid transparent; // Default border is transparent
//     //     transition: border 0.3s ease, transform 0.3s ease;
//     //   }
//   }

//   .exercise-image {
//     margin-top: 100px; /* Push the 7th card down */
//   }
// }
