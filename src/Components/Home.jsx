import React from "react";
import Header from "./header.jsx";
import Segunda_parte from "./segunda_parte.jsx";
import "../index.css";
import Footer from "./Pie_Pagina";
import Proyectos_seccion from "./proyectos.jsx";

function Home() {
  return (
    <div>
      <Header />
      <Segunda_parte />
      <Proyectos_seccion />
      <Footer />
    </div>
  );
}

export default Home;
