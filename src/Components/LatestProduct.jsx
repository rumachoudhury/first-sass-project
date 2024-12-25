import productData from "../projectPages/latestProduct.json";

function LatestProduct() {
  const { latestProducts } = productData;
  return (
    <div>
      <div className="latest-section ">
        <div className="heading-btn">
          <h1 className="latest-product-title">Latest Product</h1>
          <button className="latest-button">View More</button>
        </div>
        <div className="product-container">
          {latestProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container product">
                {" "}
                <img
                  src="/figma-images/heart.png"
                  alt="Heart icon"
                  className="heart-icon"
                />
                <img
                  src={product.img}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-overlay" style={product.style}>
                  {/* Limited Stock text for second image*/}
                  <h6 className="text">{product.text}</h6>
                  <h2 className="product-title">{product.title}</h2>
                  <p>{product.details}</p>
                  <h3>{product.sale}</h3>
                  <img src="/figma-images/arrow.png" alt="Arrow icon" />
                  <div className="shop-now-container">
                    <button className="shop-now-button">SHOP NOW</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestProduct;
