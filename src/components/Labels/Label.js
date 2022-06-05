import { useAuth, useData, useLoader } from "../../contexts";
import { updateNote } from "../../utils/noteServerCalls";

export const Label = ({ label, note }) => {
  const {
    dataState: { userNotes },
    dispatchData,
  } = useData();

  const {
    authState: { token },
  } = useAuth();
  const { setIsLoading } = useLoader();

  const isLabelPresent = note.tags.some((tag) => tag === label);

  const labelChangeHandler = (event, note, label) => {
    if (isLabelPresent) {
      updateNote(
        { ...note, tags: note.tags.filter((tag) => tag !== label) },
        dispatchData,
        setIsLoading,
        token
      );
    } else {
      updateNote(
        { ...note, tags: note.tags.concat(label) },
        dispatchData,
        setIsLoading,
        token
      );
    }
  };

  return (
    <div className="flex gap-half">
      <input
        type="checkbox"
        id={label}
        value={label}
        onChange={(e) => labelChangeHandler(e, note, label)}
        onClick={(e) => e.stopPropagation()}
        checked={isLabelPresent}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};
