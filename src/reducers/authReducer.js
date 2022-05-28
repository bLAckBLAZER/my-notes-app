import { getDefaultAuthState } from "../contexts/getDefaultAuthState";
export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, user: payload.foundUser, token: payload.encodedToken };
    case "LOGOUT":
      return getDefaultAuthState();
    default:
      return state;
  }
};
