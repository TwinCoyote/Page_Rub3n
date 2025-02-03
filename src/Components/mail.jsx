import { useState } from "react";
import "./Mail.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, telefono, correo, mensaje } = formData;
    const destinatario = "contacto@rub3n.dev";

    const mailtoLink = `mailto:${destinatario}?subject=Mensaje de ${encodeURIComponent(
      nombre
    )}&body=Nombre: ${encodeURIComponent(nombre)}%0D%0A
    Teléfono: ${encodeURIComponent(telefono)}%0D%0A
    Correo: ${encodeURIComponent(correo)}%0D%0A
    Mensaje: ${encodeURIComponent(mensaje)}`;

    window.location.href = mailtoLink;
    k;
  };

  return (
    <div className="contact-form-container">
      <h2>
        Contacta <span>Rub3n Electronics</span>
      </h2>
      <p>Llámanos al (844) 371-1982</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          className="contact-input"
          value={formData.nombre}
          onChange={handleChange} // ⬅️ Agregado
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          className="contact-input"
          value={formData.telefono}
          onChange={handleChange} // ⬅️ Agregado
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo Electrónico"
          className="contact-input"
          value={formData.correo}
          onChange={handleChange} // ⬅️ Agregado
          required
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          className="contact-input contact-textarea"
          value={formData.mensaje}
          onChange={handleChange} // ⬅️ Agregado
          required
        />
        <button type="submit" className="contact-button">
          ENVIAR MENSAJE
        </button>
      </form>
    </div>
  );
}
