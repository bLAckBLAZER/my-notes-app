import "./Input.css";

export const Input = ({
  id,
  type,
  icon,
  placeholder,
  value,
  onValueChange,
}) => {
  return (
    <div className="input-wrapper" id={id}>
      <div className="input-container">
        <i>{icon}</i>
        <input
          type={type}
          className="input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
        />
      </div>
    </div>
  );
};
