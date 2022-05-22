import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers";
import { getDefaultAuthState } from "./getDefaultAuthState";

const AuthContext = createContext(getDefaultAuthState());

const AuthProvider = ({ children }) => {
  const [authState, dispatchAuth] = useReducer(
    authReducer,
    getDefaultAuthState()
  );

  return (
    <AuthContext.Provider value={{ authState, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
