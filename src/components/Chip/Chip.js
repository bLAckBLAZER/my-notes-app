import "./Chip.css";

export const Chip = ({ text, onChipClick, active }) => {
  return (
    <div
      className={`chip ${active ? "active" : ""}`}
      onClick={() => onChipClick(text)}
    >
      <p>{text}</p>
    </div>
  );
};
