import React from "react";

function segunda_parte() {
  return (
    <div className="segunda_parte">
      <div className="sobre_mi">
        <h1>Sobre Mi</h1>
      </div>
      <div className="linea" />
      <div className="descripcion">
        <p>
          Soy Rubén R., estudiante de Ingeniería Electrónica en el Instituto
          Tecnológico de Saltillo. Me apasionan los microcontroladores y la
          tecnología, y disfruto transformar ideas en proyectos funcionales,
          combinando creatividad con conocimientos técnicos. En mi tiempo libre,
          diseño y construyo proyectos electrónicos, lo que me permite
          perfeccionar mis habilidades. Soy una persona curiosa y proactiva,
          siempre en busca de nuevas herramientas y aprendizajes. Tengo
          experiencia en reparación de tarjetas electrónicas, manejo avanzado de
          Excel y PLC, y exploro áreas como el desarrollo web para crear
          soluciones integrales. Valoro el aprendizaje continuo, el trabajo en
          equipo y las oportunidades de crecimiento, convencido de que cada
          proyecto es una oportunidad para aprender y dejar mi huella.
        </p>
      </div>
      <div className="logos">
        <div className="logo html">
          <img src="public\html.png" alt="HTML" className="icon" />
          <div className="skills">
            <div className="skill">
              <div className="skill-name">HTML</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="50%"
                  style={{ maxWidth: "50%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="logo css">
          <img src="public/css-3 (1).png" alt="CSS" />
          <div className="skills">
            <div className="skill">
              <div className="skill-name">CSS</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="30%"
                  style={{ maxWidth: "30%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="logo javaS">
          <img src="public/jsT.png" alt="Java script" />
          <div className="skills">
            <div className="skill">
              <div className="skill-name">JS</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="20%"
                  style={{ maxWidth: "20%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="logo python">
          <img
            src="public/python-logo-A47526A426-seeklogo.com.png"
            alt="Python"
          />
          <div className="skills">
            <div className="skill">
              <div className="skill-name">PY</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="50%"
                  style={{ maxWidth: "50%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default segunda_parte;
