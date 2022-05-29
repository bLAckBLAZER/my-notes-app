import "./Note.css";
import {
  MdPushPin,
  MdOutlineColorLens,
  MdLabelOutline,
  MdOutlineArchive,
  MdOutlineDeleteOutline,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { Chip } from "../Chip/Chip";

export const Note = ({ note, noteActions }) => {
  const date = new Date(note.updatedAt);

  return (
    <div className="note-box">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between align-ctr">
          <div className="note-title">{note.title}</div>
          <i>
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
            {noteActions?.map((action) => (
              <i
                title={action.title}
                onClick={() => action.onClickAction(note)}
                key={action.title}
              >
                {action.icon}
              </i>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
