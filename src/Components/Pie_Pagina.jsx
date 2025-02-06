import React from "react";
import "./Pie_Pagina.css";
import { Link } from "react-router-dom";
import ContactForm from "./Mail.jsx";

function Footer() {
  return (
    <div className="footer-container" id="contact">
      <ContactForm />
      <div className="input-areas"></div>
      <div className="footer-links"></div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              RUB3N
            </Link>
          </div>
          <small className="website-rights">ITS</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link facebook"
              to="/contacto"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fa-solid fa-file-invoice" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
