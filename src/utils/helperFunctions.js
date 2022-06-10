export const isPresentInList = (itemId, list) => {
  if (list.length === 0) {
    return false;
  }

  return list.some((listItem) => listItem._id === itemId);
};

export const getAllLabels = (notes) => {
  const allLabels = notes.reduce((acc, curr) => acc.concat(curr.tags), []);

  const labelSet = [...new Set(allLabels)];

  return labelSet;
};
