import { NewNote, Note } from "../../components";
import "./Dashboard.css";
import { useData } from "../../contexts";
import {
  MdOutlineColorLens,
  MdLabelOutline,
  MdOutlineArchive,
  MdOutlineModeEditOutline,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { useState } from "react";
import { defaultNewNoteData } from "../../components/Note/defaultNewNoteData";

export const Dashboard = () => {
  const {
    dataState: { userNotes },
  } = useData();

  const [newNoteData, setNewNoteData] = useState(defaultNewNoteData);
  const [updateMode, setUpdateMode] = useState(false);

  const noteActions = [
    {
      icon: <MdOutlineColorLens size={20} />,
      onClickAction: () => console.log("color click"),
      title: "Color",
    },
    {
      icon: <MdLabelOutline size={20} />,
      onClickAction: () => console.log("label click"),
      title: "Label",
    },
    {
      icon: <MdOutlineArchive size={20} />,
      onClickAction: () => console.log("archive click"),
      title: "Archive",
    },
    {
      icon: <MdOutlineModeEditOutline size={20} />,
      onClickAction: (note) => {
        setNewNoteData(note);
        setUpdateMode(true);
        window.scroll({ top: 0, behavior: "smooth" });
      },

      title: "Edit",
    },
    {
      icon: <MdOutlineDeleteOutline size={20} />,
      onClickAction: () => console.log("delete click"),
      title: "Delete",
    },
  ];

  return (
    <main className="flex-1 mg-y-1 flex flex-col align-ctr gap-1">
      <NewNote
        newNoteData={newNoteData}
        setNewNoteData={setNewNoteData}
        updateMode={updateMode}
        setUpdateMode={setUpdateMode}
      />
      {!userNotes.length && (
        <h3 className="txt-center">You don't have any notes!</h3>
      )}
      {userNotes.map((note) => (
        <Note note={note} key={note._id} noteActions={noteActions} />
      ))}
    </main>
  );
};