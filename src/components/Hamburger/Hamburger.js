import "./Hamburger.css";

export const Hamburger = ({ onClickAction }) => {
  return (
    <div className="hamburger" id="hamburger" onClick={() => onClickAction()}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
