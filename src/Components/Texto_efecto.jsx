import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function TypedText() {
  const typedElement = useRef(null);

  useEffect(() => {
    // Configuración de Typed.js
    const typed = new Typed(typedElement.current, {
      strings: ["Soy Ruben R.", "Soy Estudiante", "Soy Entusiasta"],
      typeSpeed: 100,
      backSpeed: 70,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      {/* El span es donde Typed.js añadirá el texto animado */}
      <span className="escritura" ref={typedElement}></span>
    </div>
  );
}

export default TypedText;
