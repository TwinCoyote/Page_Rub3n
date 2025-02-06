import React from "react";
import Itembox from "./itembox";

function Proyectos_seccion() {
  return (
    <div className="tercera_parte" id="proyectos">
      <div className="proyectos">
        <div className="tercer_titulo">
          <h1>Proyectos</h1>
        </div>
        <div className="proyectos_des">
          <div className="proyectos_des_back">
            <p>
              Una muestra de mi trabajo en diseño electrónico y desarrollo de
              software.
            </p>
          </div>
        </div>
      </div>

      <div className="ventanas">
        <Itembox />
      </div>
    </div>
  );
}

export default Proyectos_seccion;
