import { NewNote, Note, FilterBox } from "../../components";
import "./Dashboard.css";
import { useData } from "../../contexts";
import { useState, useEffect } from "react";
import { defaultNewNoteData } from "../../components/Note/defaultNewNoteData";
import {
  filterByTags,
  filterByColors,
  sortByTime,
} from "../../utils/helperFunctions";

export const Dashboard = () => {
  const {
    dataState: { userNotes },
  } = useData();

  const [newNoteData, setNewNoteData] = useState(defaultNewNoteData);
  const [updateMode, setUpdateMode] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    selectedTags: [],
    selectedColors: [],
    sortBy: "latestFirst",
  });

  const allFilters = [filterByTags, filterByColors, sortByTime];

  const isAnyPinnedNotePresent = filteredNotes.some((note) => note.isPinned);

  useEffect(() => {
    const temp = allFilters.reduce(
      (notesUntilNow, filterFunc) => filterFunc(selectedFilters, notesUntilNow),
      userNotes
    );

    setFilteredNotes(temp);
  }, [selectedFilters, userNotes]);

  return (
    <main className="flex-1 mg-y-1 flex flex-col align-ctr gap-1">
      <FilterBox
        notes={userNotes}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <NewNote
        newNoteData={newNoteData}
        setNewNoteData={setNewNoteData}
        updateMode={updateMode}
        setUpdateMode={setUpdateMode}
      />
      {!filteredNotes.length && (
        <h3 className="txt-center">You don't have any notes!</h3>
      )}

      {isAnyPinnedNotePresent && (
        <div className="h3 pd-x-2" style={{ alignSelf: "flex-start" }}>
          Pinned Notes:
        </div>
      )}
      {filteredNotes.map(
        (note) =>
          note.isPinned && (
            <Note
              note={note}
              key={note._id}
              setNewNoteData={setNewNoteData}
              setUpdateMode={setUpdateMode}
            />
          )
      )}

      {isAnyPinnedNotePresent && (
        <div className="h3 pd-x-2" style={{ alignSelf: "flex-start" }}>
          Other Notes:
        </div>
      )}

      {filteredNotes.map(
        (note) =>
          !note.isPinned && (
            <Note
              note={note}
              key={note._id}
              setNewNoteData={setNewNoteData}
              setUpdateMode={setUpdateMode}
            />
          )
      )}
    </main>
  );
};
