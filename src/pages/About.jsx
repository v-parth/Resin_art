import React from "react";
import Navbar from "../components/Navbar";
import "../style/About.css";
import blue1 from "../assets/blue1.png";


function About() {
  return (
    <div className="page">

      {/* Navbar */}
      <Navbar />

      <section className="about-hero">

        <h1>About Resin Art by Sanjana</h1>

        <p>
          Every resin art piece is handcrafted with passion,
          creativity, and attention to every small detail.
        </p>

      </section>

      <section className="about-container">

        <div className="about-image">
          <img
                src={blue1}
                alt="Resin Art Collection"
                className="hero-image"
              />
        </div>

        <div className="about-content">

          <h2>Our Story</h2>

          <p>
            Resin Art by Sanjana was created with one simple idea:
            to turn beautiful memories into timeless resin art.
            Every product is handmade with love and carefully
            designed to make every special moment unforgettable.
          </p>

          <p>
            Whether it's a wedding, birthday, anniversary,
            or a meaningful gift, our mission is to create
            something unique that lasts forever.
          </p>

        </div>

      </section>

      <section className="why-us">

        <h2>Why Choose Us?</h2>

        <div className="why-grid">

          <div className="why-card">
            💎
            <h3>Premium Quality</h3>
            <p>Only high-quality resin materials are used.</p>
          </div>

          <div className="why-card">
            ❤️
            <h3>Handmade</h3>
            <p>Every product is crafted with care and creativity.</p>
          </div>

          <div className="why-card">
            🎁
            <h3>Perfect Gift</h3>
            <p>Customized gifts for every special occasion.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;