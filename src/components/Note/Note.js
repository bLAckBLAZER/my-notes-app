import "./Note.css";
import {
  MdPushPin,
  MdOutlineColorLens,
  MdLabelOutline,
  MdOutlineArchive,
  MdOutlineModeEditOutline,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { Chip } from "../Chip/Chip";
import { updateNote } from "../../utils/noteServerCalls";
import { useAuth, useData, useLoader } from "../../contexts";
import { moveToTrash, moveToArchive } from "../../utils/noteServerCalls";
import { LabelBox } from "../Labels/LabelBox";
import { useState } from "react";
import { ColorBox } from "../ColorBox/ColorBox";

export const Note = ({ note, setNewNoteData, setUpdateMode }) => {
  const date = new Date(note.updatedAt);

  const { dispatchData } = useData();
  const {
    authState: { token },
  } = useAuth();
  const { setIsLoading } = useLoader();

  const [showLabelBox, setShowLabelBox] = useState(false);
  const [showColorBox, setShowColorBox] = useState(false);

  return (
    <div className="note-box" style={{ backgroundColor: note.backgroundColor }}>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between align-ctr">
          <div className="note-title">{note.title}</div>

          <i
            onClick={() =>
              updateNote(
                { ...note, isPinned: !note.isPinned },
                dispatchData,
                setIsLoading,
                token
              )
            }
          >
            <MdPushPin size={20} color={note.isPinned ? "00a82d" : "black"} />
          </i>
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
              title="Color"
              onClick={() => setShowColorBox(!showColorBox)}
              className="pos-rel"
            >
              <MdOutlineColorLens size={20} />
              {showColorBox && <ColorBox note={note} />}
            </i>

            <i
              title="Label"
              onClick={() => setShowLabelBox(!showLabelBox)}
              className="pos-rel"
            >
              <MdLabelOutline size={20} />
              {showLabelBox && <LabelBox note={note} />}
            </i>

            <i
              title="Archive"
              onClick={() =>
                moveToArchive(note, dispatchData, setIsLoading, token)
              }
            >
              <MdOutlineArchive size={20} />
            </i>
            <i
              title="Edit"
              onClick={() => {
                setNewNoteData(note);
                setUpdateMode(true);
                window.scroll({ top: 0, behavior: "smooth" });
              }}
            >
              <MdOutlineModeEditOutline size={20} />
            </i>
            <i
              title="Move to Trash"
              onClick={() =>
                moveToTrash(note, dispatchData, setIsLoading, token)
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
