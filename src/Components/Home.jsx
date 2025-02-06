import React from "react";
import Header from "./header.jsx";
import Tercera_partes from "./Tercera_parte.jsx";
import Segunda_parte from "./segunda_parte.jsx";
import "../index.css";
import Footer from "./Pie_Pagina";

function Home() {
  return (
    <div>
      <Header />
      <Segunda_parte />
      <Tercera_partes />
      <Footer />
    </div>
  );
}

export default Home;
