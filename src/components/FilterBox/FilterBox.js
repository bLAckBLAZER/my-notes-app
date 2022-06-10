import { useData } from "../../contexts";
import { getAllLabels } from "../../utils/helperFunctions";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./FilterBox.css";

export const FilterBox = ({
  notes,
  showFilters,
  setShowFilters,
  selectedFilters,
  setSelectedFilters,
}) => {
  const colors = {
    white: "white",
    red: "red",
    green: "green",
    yellow: "yellow",
  };

  const tagList = getAllLabels(notes);

  const isPresentInList = (itemToCheck, list) => {
    return list.some((item) => item === itemToCheck);
  };

  const toggleTagHandler = (tag) => {
    if (isPresentInList(tag, selectedFilters.selectedTags)) {
      setSelectedFilters({
        ...selectedFilters,
        selectedTags: selectedFilters.selectedTags.filter(
          (item) => item !== tag
        ),
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        selectedTags: selectedFilters.selectedTags.concat(tag),
      });
    }
  };

  const toggleColorHandler = (color) => {
    if (isPresentInList(color, selectedFilters.selectedColors)) {
      setSelectedFilters({
        ...selectedFilters,
        selectedColors: selectedFilters.selectedColors.filter(
          (item) => item !== color
        ),
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        selectedColors: selectedFilters.selectedColors.concat(color),
      });
    }
  };

  return (
    <section className="filters pd-x-1 width-100">
      <div
        className="flex justify-between align-ctr pd-x-1"
        onClick={() => setShowFilters(!showFilters)}
        id="filter-box"
      >
        <div className="h3">Filters & Sort</div>
        {showFilters ? (
          <MdKeyboardArrowUp size={20} />
        ) : (
          <MdKeyboardArrowDown size={20} />
        )}
      </div>
      {showFilters && (
        <div className="flex pd-x-1">
          <div className="flex-1 flex flex-col gap-half">
            <div className="flex gap-half align-ctr">
              <div>Tags:</div>
              <div className="flex flex-wrap gap-half">
                {!tagList.length && <p>No tags created yet...</p>}
                {tagList.length > 0 &&
                  tagList.map((tag) => (
                    <div key={tag}>
                      <input
                        type="checkbox"
                        name={tag}
                        id={tag}
                        onChange={() => toggleTagHandler(tag)}
                      />
                      <label htmlFor={tag}>{tag}</label>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex gap-half align-ctr">
              <div>Colors:</div>
              <div className="flex flex-wrap gap-half">
                {Object.keys(colors).map((colorKey) => (
                  <div
                    className={`avatar avatar-sm ${
                      isPresentInList(colorKey, selectedFilters.selectedColors)
                        ? "active-color"
                        : ""
                    }`}
                    key={colorKey}
                    style={{
                      backgroundColor: colors[colorKey],
                      height: "1.5rem",
                      width: "1.5rem",
                    }}
                    onClick={() => {
                      toggleColorHandler(colorKey);
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-half">
            <div>Sort by:</div>
            <div>
              <input
                type="radio"
                name="time"
                id="latest-first"
                value="latestFirst"
                checked={selectedFilters.sortBy === "latestFirst"}
                onChange={(e) =>
                  setSelectedFilters({
                    ...selectedFilters,
                    sortBy: e.target.value,
                  })
                }
              />
              <label htmlFor="latest-first">Latest First</label>
            </div>
            <div>
              <input
                type="radio"
                name="time"
                id="oldest-first"
                value="oldestFirst"
                checked={selectedFilters.sortBy === "oldestFirst"}
                onChange={(e) =>
                  setSelectedFilters({
                    ...selectedFilters,
                    sortBy: e.target.value,
                  })
                }
              />
              <label htmlFor="oldest-first">Oldest First</label>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
