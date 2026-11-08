import { useState } from "react";
import Field from "./Field.jsx";
import "../styles/section.css";

function GeneralInfo() {
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsEditing(false);
  }

  if (!isEditing) {
    return (
      <section className="section">
        <h2>General Information</h2>
        <p className="display-main">{info.name}</p>
        <p>{info.email}</p>
        <p>{info.phone}</p>
        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </section>
    );
  }

  return (
    <section className="section">
      <h2>General Information</h2>
      <form onSubmit={handleSubmit}>
        <Field
          id="name"
          label="Full name"
          name="name"
          value={info.name}
          onChange={handleChange}
          required
        />
        <Field
          id="email"
          label="Email"
          type="email"
          name="email"
          value={info.email}
          onChange={handleChange}
          required
        />
        <Field
          id="phone"
          label="Phone number"
          type="tel"
          name="phone"
          value={info.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default GeneralInfo;
