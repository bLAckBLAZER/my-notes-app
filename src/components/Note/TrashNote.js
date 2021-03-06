import "./Note.css";
import { MdOutlineDeleteOutline, MdRestore } from "react-icons/md";
import { Chip } from "../Chip/Chip";
import { restoreFromTrash, deleteFromTrash } from "../../utils/noteServerCalls";
import { useAuth, useData, useLoader } from "../../contexts";

export const TrashNote = ({ note }) => {
  const date = new Date(note.updatedAt);

  const { dispatchData } = useData();
  const {
    authState: { token },
  } = useAuth();
  const { setIsLoading } = useLoader();

  return (
    <div className="note-box" style={{ backgroundColor: note.backgroundColor }}>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between align-ctr">
          <div className="note-title">{note.title}</div>
        </div>
        <div className="note-text">{note.noteText}</div>
        <div className="flex flex-wrap gap-half">
          {note.tags.map((tag) => (
            <Chip text={tag} key={tag} />
          ))}
        </div>
        <div className="flex justify-between align-ctr">
          <small>
            {date.toLocaleDateString() + " " + date.toLocaleTimeString()}
          </small>
          <div className="flex justtify-between align-ctr gap-1">
            <i
              title="Restore"
              onClick={() =>
                restoreFromTrash(note, dispatchData, setIsLoading, token)
              }
            >
              <MdRestore size={20} />
            </i>
            <i
              title="Delete permanently"
              onClick={() =>
                deleteFromTrash(note, dispatchData, setIsLoading, token)
              }
            >
              <MdOutlineDeleteOutline size={20} />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};
