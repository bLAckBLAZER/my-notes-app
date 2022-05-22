export const setUserDetailsReducer = (state, { type, payload }) => {
  switch (type) {
    case "FIRST_NAME":
      return { ...state, firstName: payload };
    case "LAST_NAME":
      return { ...state, lastName: payload };
    case "EMAIL":
      return { ...state, email: payload };
    case "PASSWORD":
      return { ...state, password: payload };
    case "CONFIRM_PASSWORD":
      return { ...state, confirmPassword: payload };
    case "TOGGLE_PASSWORD":
      return { ...state, showPassword: !state.showPassword };
    default:
      return state;
  }
};
