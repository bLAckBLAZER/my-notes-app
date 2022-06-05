import { useEffect, useState } from "react";
import { useAuth, useData, useLoader } from "../../contexts";
import { Note } from "../../components";
import {
  getAllTrash,
  deleteFromTrash,
  restoreFromTrash,
} from "../../utils/noteServerCalls";
import { MdRestore, MdOutlineDeleteOutline } from "react-icons/md";

export const Trash = () => {
  const {
    authState: { token },
  } = useAuth();

  const {
    dataState: { userTrash },
    dispatchData,
  } = useData();

  const { setIsLoading } = useLoader();

  useEffect(() => {
    !userTrash.length && getAllTrash(dispatchData, setIsLoading, token);
  }, []);

  const noteActions = [
    {
      icon: <MdRestore size={20} />,
      onClickAction: (note) =>
        restoreFromTrash(note, dispatchData, setIsLoading, token),
      title: "Restore",
    },
    {
      icon: <MdOutlineDeleteOutline size={20} />,
      onClickAction: (note) =>
        deleteFromTrash(note, dispatchData, setIsLoading, token),
      title: "Delete permanently",
    },
  ];

  return (
    <main className="flex-1 mg-y-1 flex flex-col align-ctr gap-1">
      {!userTrash.length && (
        <h3 className="txt-center">You don't have any notes in trash!</h3>
      )}
      {userTrash.map((note) => (
        <Note
          note={note}
          key={note._id}
          noteActions={noteActions}
          isTrashed={true}
        />
      ))}
    </main>
  );
};
