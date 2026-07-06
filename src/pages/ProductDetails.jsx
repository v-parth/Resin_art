import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import products from "../data/products";
import "../style/ProductDetails.css";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <Navbar />

        <div className="details-page">
          <h1>Product Not Found</h1>
        </div>
      </>
    );
  }

  return (
    <>

      {/* Navbar */}
      <Navbar />

      <div className="details-page">

        <Link
          to="/products"
          className="back-btn"
        >
          ← Back to Products
        </Link>

        <div className="details-container">

          <img
            src={product.image}
            alt={product.name}
          />

          <div className="details-content">

            <h1>{product.name}</h1>

            <h3>{product.category}</h3>

            <p>
              Handmade resin art created with premium
              quality materials. Every product is
              beautifully crafted and fully customizable.
            </p>

            <button>
              Order on WhatsApp
            </button>

          </div>

        </div>

      </div>

    </>
  );
}

export default ProductDetails;