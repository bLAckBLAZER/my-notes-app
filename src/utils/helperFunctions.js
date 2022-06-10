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

export const filterByTags = (selectedFilters, notes) => {
  if (selectedFilters.selectedTags.length === 0) {
    return [...notes];
  }

  // should add a note if it has any of the selectedTags in its tags array

  const newNotesList = [];

  for (let i = 0; i < notes.length; i++) {
    const currentNoteTags = notes[i].tags;
    for (let j = 0; j < currentNoteTags.length; j++) {
      if (selectedFilters.selectedTags.includes(currentNoteTags[j])) {
        newNotesList.push(notes[i]);
        break;
      }
    }
  }

  return newNotesList;
};

export const filterByColors = (selectedFilters, notes) => {
  if (selectedFilters.selectedColors.length === 0) {
    return [...notes];
  }

  return notes.filter((note) =>
    selectedFilters.selectedColors.includes(note.backgroundColor)
  );
};

export const sortByTime = (selectedFilters, notes) => {
  const newNotesList = [...notes];

  if (selectedFilters.sortBy === "oldestFirst") {
    return newNotesList.sort((a, b) => a.updatedAt - b.updatedAt);
  }

  return newNotesList.sort((a, b) => b.updatedAt - a.updatedAt);
};
