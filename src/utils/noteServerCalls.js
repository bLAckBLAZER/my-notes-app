import axios from "axios";
// import { isPresentInList } from "./helperFunctions";
import toast from "react-hot-toast";

export const getAllNotes = async (dispatchData, setIsLoading, token) => {
  try {
    setIsLoading(true);
    const res = await axios({
      method: "get",
      url: "/api/notes",
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      dispatchData({ type: "SET_ALL_NOTES", payload: res.data.notes });
    } else {
      console.error("get all notes call failed with status: ", res.status);
    }
  } catch (err) {
    console.error("Error getting all notes", err);
  } finally {
    setIsLoading(false);
  }
};

export const addNewNote = async (note, dispatchData, setIsLoading, token) => {
  try {
    setIsLoading(true);
    const res = await axios({
      method: "post",
      url: "/api/notes",
      data: {
        note,
      },
      headers: {
        authorization: token,
      },
    });

    if (res.status === 201) {
      dispatchData({ type: "SET_ALL_NOTES", payload: res.data.notes });
      toast.success("Note added successfully", {
        position: "bottom-center",
      });

      return res.status;
    } else {
      console.error("add new note call failed with status: ", res.status);
      toast.error("Oops! Failed to add new note!", {
        position: "bottom-center",
      });
    }
  } catch (err) {
    console.error("Error adding new note", err);
    toast.error("Oops! Failed to add new note!", {
      position: "bottom-center",
    });
  } finally {
    setIsLoading(false);
  }
};

export const updateNote = async (
  noteToUpdate,
  dispatchData,
  setIsLoading,
  token
) => {
  const note = { ...noteToUpdate, updatedAt: Date.now() };

  try {
    setIsLoading(true);
    const res = await axios({
      method: "post",
      url: `/api/notes/${note._id}`,
      data: {
        note,
      },
      headers: {
        authorization: token,
      },
    });

    if (res.status === 201) {
      dispatchData({ type: "SET_ALL_NOTES", payload: res.data.notes });
      toast.success("Note updated successfully", {
        position: "bottom-center",
      });

      return res.status;
    } else {
      console.error("update note call failed with status: ", res.status);
      toast.error("Oops! Failed to update note!", {
        position: "bottom-center",
      });
    }
  } catch (err) {
    console.error("Error updating note", err);
    toast.error("Oops! Failed to update the note!", {
      position: "bottom-center",
    });
  } finally {
    setIsLoading(false);
  }
};
