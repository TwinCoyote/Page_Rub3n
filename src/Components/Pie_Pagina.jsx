import React from "react";
import "./Pie_Pagina.css";
import { Link } from "react-router-dom";
import ContactForm from "./Mail";

function Footer() {
  return (
    <div className="footer-container">
      <ContactForm />
      <div className="input-areas"></div>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Acerca de Nosotros</h2>
            <Link to="/contacto">¿Quiénes somos?</Link>
            <Link to="/sobre-nosotros">¿Cuánta experiencia tenemos?</Link>
            <Link to="/sobre-nosotros">Términos de Servicio</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contacto</h2>
            <Link to="/contacto">Ubicación </Link>
            <Link to="/sobre-nosotros">Numeros de Telefono</Link>
          </div>
          <div className="footer-link-items">
            <h2>Consultas y Cotizaciones</h2>
            <Link to="/contacto">Ver en Persona</Link>
            <Link to="/sobre-nosotros">Consultas por via Zoom</Link>
            <Link to="/sobre-nosotros">WhatsApp </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Contadores Reyna <i className="fa-solid fa-calculator" />
            </Link>
          </div>
          <small className="website-rights">Ruben.dev</small>
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
