import { useState } from "react";
import Field from "./Field.jsx";
import { formatRange } from "../utils/formatMonth.js";
import "../styles/section.css";

function Experience() {
  const [job, setJob] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    until: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;
    setJob({ ...job, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsEditing(false);
  }

  if (!isEditing) {
    return (
      <section className="section">
        <h2>Practical Experience</h2>
        <p className="display-main">{job.company}</p>
        <p>{job.position}</p>
        <p className="dates">{formatRange(job.from, job.until)}</p>
        <p className="multiline">{job.responsibilities}</p>
        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </section>
    );
  }

  return (
    <section className="section">
      <h2>Practical Experience</h2>
      <form onSubmit={handleSubmit}>
        <Field
          id="company"
          label="Company name"
          name="company"
          value={job.company}
          onChange={handleChange}
          required
        />
        <Field
          id="position"
          label="Position title"
          name="position"
          value={job.position}
          onChange={handleChange}
          required
        />

        <div className="field">
          <label htmlFor="responsibilities">Main responsibilities</label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            rows="4"
            value={job.responsibilities}
            onChange={handleChange}
            required
          />
        </div>

        <Field
          id="job-from"
          label="Start"
          type="month"
          name="from"
          value={job.from}
          onChange={handleChange}
          required
        />
        <Field
          id="job-until"
          label="End (leave empty if current)"
          type="month"
          name="until"
          value={job.until}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Experience;
