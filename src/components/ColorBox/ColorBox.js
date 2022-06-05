import "./ColorBox.css";
import { useState } from "react";
import { updateNote } from "../../utils/noteServerCalls";
import { useAuth, useData, useLoader } from "../../contexts";

export const ColorBox = ({ note }) => {
  const colors = {
    white: "white",
    red: "red",
    green: "green",
    yellow: "yellow",
  };

  const [selectedColorKey, setSelectedColorKey] = useState("white");

  const {
    authState: { token },
  } = useAuth();
  const { dispatchData } = useData();
  const { setIsLoading } = useLoader();

  return (
    <div
      className="menu-box flex flex-wrap"
      onClick={(e) => e.stopPropagation()}
    >
      {Object.keys(colors).map((colorKey) => (
        <div
          className={`avatar avatar-sm ${
            colorKey === selectedColorKey ? "active-color" : ""
          }`}
          key={colorKey}
          style={{ backgroundColor: colors[colorKey] }}
          onClick={() => {
            setSelectedColorKey(colorKey);
            updateNote(
              { ...note, backgroundColor: colors[colorKey] },
              dispatchData,
              setIsLoading,
              token
            );
          }}
        ></div>
      ))}
    </div>
  );
};
