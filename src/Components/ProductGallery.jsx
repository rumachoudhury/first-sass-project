import React from "react";
import ProductGalleryData from "../projectPages/productGallery.json";
// import "./ProductGallery.scss";

function ProductGallery() {
  return (
    <div className="gallery-section container">
      <div className="gallery-heading">
        <h1>Our Product Gallery</h1>
      </div>
      <div className="gallery-grid">
        {ProductGalleryData.ProductGallery.map((product) => (
          <div key={product.id} className="gallery-item">
            <img
              src={product.image}
              alt={`Product ${product.id}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;

// __________________________________________________//

// import React from "react";
// import ProductGalleryData from "../projectPages/productGallery.json";
// // import "./productGallery.scss";

// function ProductGallery() {
//   return (
//     <div>
//       <div className="galiery-section container">
//         <div className="gallery-heading">
//           <h1>Product Gallery</h1>
//         </div>

//         <div className="gallery-grid">
//           {ProductGalleryData.ProductGallery.map((product) => (
//             <div key={product.id} className="gallery-item">
//               <img
//                 src={product.image}
//                 alt={`Product ${product.id}`}
//                 className="gallery-image"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductGallery;
