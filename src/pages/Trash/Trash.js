import { useEffect, useState } from "react";
import { useAuth, useData, useLoader } from "../../contexts";
import { TrashNote } from "../../components";
import { getAllTrash } from "../../utils/noteServerCalls";

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

  return (
    <main className="flex-1 mg-y-1 flex flex-col align-ctr gap-1">
      {!userTrash.length && (
        <h3 className="txt-center">You don't have any notes in trash!</h3>
      )}
      {userTrash.map((note) => (
        <TrashNote note={note} key={note._id} />
      ))}
    </main>
  );
};
