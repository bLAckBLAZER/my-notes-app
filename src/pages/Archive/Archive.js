import { useEffect } from "react";
import { useAuth, useData, useLoader } from "../../contexts";
import { ArchiveNote } from "../../components";
import { getAllArchive } from "../../utils/noteServerCalls";

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

  return (
    <main className="flex-1 mg-y-1 flex flex-col align-ctr gap-1">
      {!userArchive.length && (
        <h3 className="txt-center">You don't have any archived notes!</h3>
      )}
      {userArchive.map((note) => (
        <ArchiveNote note={note} key={note._id} />
      ))}
    </main>
  );
};
