import { useAuth, useData, useLoader } from "../../contexts";
import { getAllLabels } from "../../utils/helperFunctions";
import { Label } from "./Label";
import "./LabelBox.css";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { updateNote } from "../../utils/noteServerCalls";

export const LabelBox = ({ note }) => {
  const {
    dataState: { userNotes },
    dispatchData,
  } = useData();

  const { setIsLoading } = useLoader();
  const {
    authState: { token },
  } = useAuth();

  const labels = getAllLabels(userNotes);

  const [addNewLabel, setAddNewLabel] = useState(false);
  const [newLabelText, setNewLabelText] = useState("");

  const addNewLabelHandler = (label) => {
    if (label.length === 0) return;

    updateNote(
      { ...note, tags: note.tags.concat(label) },
      dispatchData,
      setIsLoading,
      token
    );
    setAddNewLabel(false);
    setNewLabelText("");
  };

  return (
    <ul className="menu-box label-box" onClick={(e) => e.stopPropagation()}>
      {labels.map((label) => (
        <Label label={label} note={note} key={label} />
      ))}
      {!addNewLabel && (
        <div
          className="flex gap-half align-ctr"
          onClick={(e) => setAddNewLabel(!addNewLabel)}
        >
          <MdAdd size={20} />
          <p>New Label</p>
        </div>
      )}
      {addNewLabel && (
        <div className="flex flex-col gap-half">
          <input
            type="text"
            placeholder="Enter new label..."
            value={newLabelText}
            onChange={(e) => setNewLabelText(e.target.value)}
          />

          <button
            className="btn btn-secondary width-100"
            onClick={() => {
              setNewLabelText("");
              setAddNewLabel(false);
            }}
          >
            Cancel
          </button>
          <button
            className={`btn btn-primary width-100 ${
              newLabelText.length === 0 ? "disabled" : ""
            }`}
            onClick={() => addNewLabelHandler(newLabelText)}
          >
            Add
          </button>
        </div>
      )}
    </ul>
  );
};
