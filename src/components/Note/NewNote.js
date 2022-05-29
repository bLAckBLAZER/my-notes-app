import "./Note.css";
import { MdPushPin } from "react-icons/md";
import { useState } from "react";
import { defaultNewNoteData } from "./defaultNewNoteData";
import { addNewNote, updateNote } from "../../utils/noteServerCalls";
import { useData, useAuth, useLoader } from "../../contexts";

export const NewNote = ({
  newNoteData,
  setNewNoteData,
  updateMode,
  setUpdateMode,
}) => {
  const {
    dataState: { userNotes },
    dispatchData,
  } = useData();

  const {
    authState: { token },
  } = useAuth();

  const { setIsLoading } = useLoader();

  const createNewNoteHandler = (event) => {
    event.preventDefault();

    if (updateMode) {
      updateNote(
        newNoteData,
        setNewNoteData,
        setUpdateMode,
        dispatchData,
        setIsLoading,
        token
      );
    } else {
      const noteToAdd = {
        ...newNoteData,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      addNewNote(noteToAdd, setNewNoteData, dispatchData, setIsLoading, token);
    }
  };

  return (
    <section className="note-box">
      <form className="flex flex-col" onSubmit={(e) => createNewNoteHandler(e)}>
        <div className="flex align-ctr" style={{ justifyContent: "flex-end" }}>
          <i
            onClick={(e) =>
              setNewNoteData({
                ...newNoteData,
                isPinned: !newNoteData.isPinned,
              })
            }
          >
            <MdPushPin
              size={20}
              color={newNoteData.isPinned ? "00a82d" : "black"}
            />
          </i>
        </div>
        <input
          type="text"
          placeholder="Title"
          value={newNoteData.title}
          onChange={(e) =>
            setNewNoteData({ ...newNoteData, title: e.target.value })
          }
        />
        <textarea
          className="note-text"
          placeholder="Enter note text..."
          value={newNoteData.noteText}
          onChange={(e) =>
            setNewNoteData({ ...newNoteData, noteText: e.target.value })
          }
          required
        ></textarea>
        <div className="flex justify-between">
          <div></div>
          <div>
            <button
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                setNewNoteData(defaultNewNoteData);
                setUpdateMode(false);
              }}
            >
              Cancel
            </button>
            <button className="btn btn-primary" type="submit">
              {updateMode ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
