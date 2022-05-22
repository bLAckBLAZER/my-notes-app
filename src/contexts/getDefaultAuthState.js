import { getLocalStorage } from "../utils/localStorageCalls";

export const getDefaultAuthState = () => {
  const token = getLocalStorage("token") || null;
  const user = getLocalStorage("user", true) || null;

  return {
    token,
    user,
  };
};
