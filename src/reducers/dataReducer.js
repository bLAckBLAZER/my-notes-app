import { defaultDataState } from "../contexts/defaultDataState";

export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_ALL_NOTES":
      return { ...state, userNotes: payload };
    case "SET_TRASH":
      return { ...state, userTrash: payload };
    case "SET_ARCHIVE":
      return { ...state, userArchive: payload };
    case "RESET":
      return defaultDataState;
    default:
      return state;
  }
};
