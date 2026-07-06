import React from "react";
import "../style/Home.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import blue1 from "../assets/blue1.png";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home">

        {/* Hero Section */}

        <section className="hero">

          <div className="hero-left">

            <p className="small-title">
              DREAM • DESIGN • Customization
            </p>

            <h1>
              Preserving Your <br />
              Precious Memories <br />
              Forever.
            </h1>

            <p className="hero-text">
              We create beautiful handcrafted resin art products that
              transform your precious memories into timeless keepsakes.
              Every creation is designed with love, creativity and premium quality.
            </p>

            <div className="hero-buttons">

              <Link to="/products">
                <button className="shop-btn">
                  Explore Products
                </button>
              </Link>

              <Link to="/about">
                <button className="learn-btn">
                  Learn More
                </button>
              </Link>

            </div>

          </div>

          {/* <div className="hero-right">

            <div className="glass-card">

              <div className="circle circle1"></div>

              <div className="circle circle2"></div>

              <div className="circle circle3"></div>

              <h2>DreamBrand</h2>

              <p>
                Handmade Resin Art <br />
                Crafted With Love ❤️
              </p>

            </div>

          </div> */}

      <div className="hero-right">
  <div className="glass-card">
    <img
      src={blue1}
      alt="Resin Art Collection"
      className="hero-image"
    />
  </div>
</div>
        </section>

        {/* Features */}

        <section className="features">

          <h2>Why Choose Us</h2>

          <div className="feature-grid">

            <div className="feature-card">
              <h3>🎨 Handmade</h3>
              <p>
                Every product is handcrafted with attention to every detail.
              </p>
            </div>

            <div className="feature-card">
              <h3>💎 Premium Quality</h3>
              <p>
                High-quality resin and premium finishing for lasting beauty.
              </p>
            </div>

            <div className="feature-card">
              <h3>🎁 Customized Gifts</h3>
              <p>
                Personalized resin gifts made for your special moments.
              </p>
            </div>

            <div className="feature-card">
              <h3>❤️ Made With Love</h3>
              <p>
                Every design is created with creativity and passion.
              </p>
            </div>

          </div>

        </section>

        {/* Featured Products */}


        {/* Featured Products */}

<section className="products">

  <h2>Featured Collection</h2>

  <div className="product-grid">

    {/* Product 1 */}

    <div className="product-card">

      <img
        src={product1}
        alt="Pooja Thali"
        className="product-image"
      />

      <h3>Pooja Thali</h3>

      <Link to="/products">
        <button>View Details</button>
      </Link>

    </div>

    {/* Product 2 */}

    <div className="product-card">

      <img
        src={product2}
        alt="Rose Preserve Keychain"
        className="product-image"
      />

      <h3>Rose Preserve Keychain</h3>

      <Link to="/products">
        <button>View Details</button>
      </Link>

    </div>

    {/* Product 3 */}

    <div className="product-card">

      <img
        src={product3}
        alt="Memory Clock"
        className="product-image"
      />

      <h3>Memory Clock</h3>

      <Link to="/products">
        <button>View Details</button>
      </Link>

    </div>

  </div>

</section>

        {/* <section className="products">

          <h2>Featured Collection</h2>

          <div className="product-grid">

            <div className="product-card">

              <div className="product-image"></div>

              <h3>Pooja Thali</h3>

              <Link to="/products">
                <button>View Details</button>
              </Link>

            </div>

            <div className="product-card">

              <div className="product-image"></div>

              <h3>Rose Preserve Keychain</h3>

              <Link to="/products">
                <button>View Details</button>
              </Link>

            </div>

            <div className="product-card">

              <div className="product-image"></div>

              <h3>Memory Clock</h3>

              <Link to="/products">
                <button>View Details</button>
              </Link>

            </div>

          </div>

        </section> */}

        {/* CTA */}

        <section className="cta">

          <h2>
            Let's Create Something Beautiful Together
          </h2>

          <p>
            Turn your memories into beautiful handcrafted resin art.
          </p>

          <Link to="/contact">
            <button>
              Contact Us
            </button>
          </Link>

        </section>

        {/* Footer */}

        <footer>
          © 2026 Resin Art by Sanjana | Handmade Resin Art | Made with ❤️
        </footer>

      </div>

    </>
  );
}

export default Home;