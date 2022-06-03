import { NewNote, Note } from "../../components";
import "./Dashboard.css";
import { useData } from "../../contexts";
import { useState } from "react";
import { defaultNewNoteData } from "../../components/Note/defaultNewNoteData";

export const Dashboard = () => {
  const {
    dataState: { userNotes },
  } = useData();

  const [newNoteData, setNewNoteData] = useState(defaultNewNoteData);
  const [updateMode, setUpdateMode] = useState(false);

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
        <Note
          note={note}
          key={note._id}
          setNewNoteData={setNewNoteData}
          setUpdateMode={setUpdateMode}
        />
      ))}
    </main>
  );
};
