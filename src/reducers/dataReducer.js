export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_ALL_NOTES":
      return { ...state, userNotes: payload };

    default:
      return state;
  }
};
