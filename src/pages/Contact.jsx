import React from "react";
import Navbar from "../components/Navbar";
import "../style/Contact.css";

// icons
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="page">

      <Navbar />

      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you. Reach us instantly through
          WhatsApp, call, or Instagram for quick support.
        </p>
      </section>

      {/* ONLY QUICK CONTACT */}
      <section className="contact-container">

        <div className="contact-buttons">

          <h2>Quick Contact</h2>

          <div className="btn-group">

            {/* WhatsApp */}
            <a
              href="https://wa.me/918460106693"
              target="_blank"
              rel="noreferrer"
              className="btn whatsapp"
            >
              <FaWhatsapp className="icon" />
              <span>WhatsApp</span>
            </a>

            {/* Call */}
            <a
              href="tel:+918460106693"
              className="btn call"
            >
              <FaPhoneAlt className="icon" />
              <span>Call Now</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/resin_bysanjana/?__pwa=1#"
              target="_blank"
              rel="noreferrer"
              className="btn insta"
            >
              <FaInstagram className="icon" />
              <span>Instagram</span>
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;