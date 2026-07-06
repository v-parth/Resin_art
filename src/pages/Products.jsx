import React from "react";
import "../style/Products.css";
import Navbar from "../components/Navbar";
import products from "../data/products";
import ProductCard from "../pages/ProductCard";

function Products() {

  const categories = ["Thali", "Keychain", "Clock", "Poster"];

  // Custom headings for each category
  const categoryTitles = {
    Thali: "Resin Thali Collection",
    Keychain: "Resin Keychain Collection",
    Clock: "Resin Clock Collection",
    Poster: "Resin Other's Collection" // Change this to any title you like
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="products-page">

        <section className="product-hero">
          <h1>Our Resin Art Collection</h1>
          <p>
            Handmade creations made with love and creativity.
          </p>
        </section>

        {categories.map((category) => (
          <section className="category-section" key={category}>

            <h2>{categoryTitles[category]}</h2>

            <div className="products-grid">
              {products
                .filter((item) => item.category === category)
                .map((item) => (
                  <ProductCard
                    key={item.id}
                    product={item}
                  />
                ))}
            </div>

          </section>
        ))}

      </div>
    </>
  );
}

export default Products;