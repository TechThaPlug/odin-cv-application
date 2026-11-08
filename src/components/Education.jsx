import { useState } from "react";
import Field from "./Field.jsx";
import { formatRange } from "../utils/formatMonth.js";
import "../styles/section.css";

function Education() {
  const [education, setEducation] = useState({
    school: "",
    title: "",
    from: "",
    until: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;
    setEducation({ ...education, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsEditing(false);
  }

  if (!isEditing) {
    return (
      <section className="section">
        <h2>Education</h2>
        <p className="display-main">{education.school}</p>
        <p>{education.title}</p>
        <p className="dates">{formatRange(education.from, education.until)}</p>
        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </section>
    );
  }

  return (
    <section className="section">
      <h2>Education</h2>
      <form onSubmit={handleSubmit}>
        <Field
          id="school"
          label="School name"
          name="school"
          value={education.school}
          onChange={handleChange}
          required
        />
        <Field
          id="study-title"
          label="Title of study"
          name="title"
          value={education.title}
          onChange={handleChange}
          required
        />
        <Field
          id="study-from"
          label="Start"
          type="month"
          name="from"
          value={education.from}
          onChange={handleChange}
          required
        />
        <Field
          id="study-until"
          label="End (leave empty if ongoing)"
          type="month"
          name="until"
          value={education.until}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Education;
