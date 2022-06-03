import { useEffect } from "react";
import { useAuth, useData, useLoader } from "../../contexts";
import { Note } from "../../components";
import {
  getAllArchive,
  deleteFromArchive,
  restoreFromArchive,
} from "../../utils/noteServerCalls";
import { MdRestore, MdOutlineDeleteOutline } from "react-icons/md";

export const Archive = () => {
  const {
    authState: { token },
  } = useAuth();

  const {
    dataState: { userArchive },
    dispatchData,
  } = useData();

  const { setIsLoading } = useLoader();

  useEffect(() => {
    !userArchive.length && getAllArchive(dispatchData, setIsLoading, token);
  }, []);

  const noteActions = [
    {
      icon: <MdRestore size={20} />,
      onClickAction: (note) =>
        restoreFromArchive(note, dispatchData, setIsLoading, token),
      title: "Restore",
    },
    {
      icon: <MdOutlineDeleteOutline size={20} />,
      onClickAction: (note) =>
        deleteFromArchive(note, dispatchData, setIsLoading, token),
      title: "Delete permanently",
    },
  ];

  return (
    <main className="flex-1 mg-y-1 flex flex-col align-ctr gap-1">
      {!userArchive.length && (
        <h3 className="txt-center">You don't have any archived notes!</h3>
      )}
      {userArchive.map((note) => (
        <Note
          note={note}
          key={note._id}
          noteActions={noteActions}
          isArchived={true}
        />
      ))}
    </main>
  );
};
