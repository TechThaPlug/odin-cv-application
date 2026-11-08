function Field({ id, label, type = "text", ...inputProps }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...inputProps} />
    </div>
  );
}

export default Field;
