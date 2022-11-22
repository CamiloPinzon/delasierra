import { useState } from "react";

import TextInput from "../text-input/text-input.component";
import "./newsletter-form.styles.scss";

const defaultFormFields = {
  nombre: "",
  email: "",
  politicaDatos: false,
};

const NewsletterForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { nombre, email, acceptedTerms } = formFields;

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    const val = value.length > 0 ? value : checked
    setFormFields({ ...formFields, [name]: val });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formFields);
    clearFields();
  };

  const clearFields = () => {
    setFormFields(defaultFormFields);
  };
  return (
    <div>
      <div className="newsletter-header">
        <h2>Newsletter</h2>
        Suscríbete para estar actualizado con las últimas noticias
      </div>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <TextInput
          label="Nombre"
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleChange}
          required={true}
        />
        <TextInput
          label="Correo electrónico"
          type="email"
          name="email"
          value={email}
          required={true}
          onChange={handleChange}
        />
        <label className="check-label">
          <input
            type="checkbox"
            name="politicaDatos"
            className="check-input"
            value={acceptedTerms}
            onChange={handleChange}
          />
          Acepto la política de tratamiento de datos
        </label>
        <button type="submit" className="suscribir-button">
          ¡Suscribirme!
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
