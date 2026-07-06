import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../style/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">

        <span className="category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <Link to={`/products/${product.id}`}>
          <button>View Details</button>
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;