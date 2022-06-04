import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useLoader } from "./LoaderContext";
import { getAllNotes } from "../utils/noteServerCalls";
import { defaultDataState } from "./defaultDataState";
import { dataReducer } from "../reducers";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const {
    authState: { token },
  } = useAuth();

  const { setIsLoading } = useLoader();

  const [dataState, dispatchData] = useReducer(dataReducer, defaultDataState);

  useEffect(() => {
    token && getAllNotes(dispatchData, setIsLoading, token);
  }, []);

  return (
    <DataContext.Provider value={{ dataState, dispatchData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
