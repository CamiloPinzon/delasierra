import "./text-input.styles.scss";

const TextInput = (inputProps) => {
  const { label } = inputProps;
  return (
    <div className="group">
      <input className="text-input" {...inputProps} />
      {label && (
        <label
          className={`${inputProps.value ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default TextInput;
