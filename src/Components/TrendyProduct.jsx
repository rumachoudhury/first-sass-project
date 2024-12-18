import React from "react";
import { FaShareAlt, FaExchangeAlt, FaHeart } from "react-icons/fa";

// Import the JSON data
import trendyProductsData from "../projectPages/trendyProduct.json";

function TrendyProduct() {
  const { trendyproducts } = trendyProductsData;

  //iconMap is a way to "map" icon names to React components
  const iconMap = {
    FaShareAlt: <FaShareAlt className="icon" />,
    FaExchangeAlt: <FaExchangeAlt className="icon" />,
    FaHeart: <FaHeart className="icon" />,
  };

  return (
    <div>
      <h1 className="trendy-heading">Super Trendy Product</h1>
      <div className="trendy-products container">
        {trendyproducts.map((product) => (
          <div key={product.id} className="trendy-card">
            <div className="trendy-product-image">
              <img src={product.image} alt={product.title} />

              {product.badge && (
                <img className="badge" src={product.badge} alt="Badge" />
              )}
            </div>
            {/* Display the 'Add to Cart' button only for the first product */}
            {product.id === 1 && product.buttons && (
              <div className="trendy-button">
                <button className={product.buttons.className}>
                  {product.buttons.label}
                </button>
              </div>
            )}
            {/* Display the action icons only for the first product */}
            {product.id === 1 &&
              product.actionItems &&
              product.actionItems.length > 0 && (
                <div className="icon-area">
                  <div className="action-icons">
                    {product.actionItems.map((action, actionIndex) => (
                      <div key={actionIndex} className="icon-container">
                        {/* {iconMap[action.icon]} is how we get the correct icon based on the value of action.icon. */}
                        {iconMap[action.icon]}{" "}
                        {/* Render the icon using the map */}
                        <span>{action.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            <div className="trendy-product-details">
              <h3 className="trendy-product-title">{product.title}</h3>
              <p className="trendy-product-description">
                {product.description}
              </p>
              <div className="trendy-product-price">
                <span className="current-price">{product.price}</span>
                <span className="previous-price">{product.previousPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="trendy-down-button">
        <button>View More</button>
      </div>
    </div>
  );
}

export default TrendyProduct;
