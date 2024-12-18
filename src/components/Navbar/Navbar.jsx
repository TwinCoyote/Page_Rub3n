import React from "react";

export const Navbar = () => {
  return (
    <header className="home">
      <nav>
        <un className="List">
          <li>
            <a href="#Sobre_mi" className="">
              Sobre Mi
            </a>
          </li>
          <li>
            <a href="#Proyectos" className="">
              Proyectos{" "}
            </a>
          </li>
          <li>
            <a href="#Ventas " className="">
              Ventas
            </a>
          </li>
          <li>
            <a href="#Conacto" className="">
              Contacto{" "}
            </a>
          </li>
        </un>
      </nav>
      <div className="container">
        <div className="slide_1">
          <span className="texto first-text"> ¡Hola, mundo!</span>
        </div>
        <div className="escritura_mov">
          <span className="escritura"> </span>
        </div>
      </div>
    </header>
  );
};
