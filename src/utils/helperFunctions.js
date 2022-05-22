export const isPresentInList = (itemId, list) => {
  if (list.length === 0) {
    return false;
  }

  return list.some((listItem) => listItem._id === itemId);
};
