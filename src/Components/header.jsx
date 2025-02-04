import React from "react";
import TypedText from "./Texto_efecto";

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
function Header() {
  return (
    <header className="home">
      <nav>
        <ul className="List">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              Sobre Mi
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("proyectos");
              }}
            >
              Proyectos{" "}
            </a>
          </li>
          <li>
            <a href="/sales " className="">
              Ventas
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contacto{" "}
            </a>
          </li>
        </ul>
      </nav>

      <div className="container">
        <div className="slide_1">
          <span className="texto first-text"> ¡Hola, mundo!</span>
        </div>
        <div className="escritura_mov">
          <span className="escritura"> </span>
          <TypedText />
        </div>
      </div>
      <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
    </header>
  );
}
export default Header;
