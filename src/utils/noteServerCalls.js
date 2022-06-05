import axios from "axios";
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
    toast.error("Error getting all notes!", {
      position: "bottom-center",
    });
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

export const moveToTrash = async (note, dispatchData, setIsLoading, token) => {
  try {
    setIsLoading(true);
    const res = await axios({
      method: "post",
      url: `/api/notes/trash/${note._id}`,
      headers: {
        authorization: token,
      },
    });

    if (res.status === 201) {
      dispatchData({ type: "SET_ALL_NOTES", payload: res.data.notes });

      dispatchData({ type: "SET_TRASH", payload: res.data.trash });

      toast.success("Note moved to trash!!!", {
        position: "bottom-center",
      });

      return res.status;
    } else {
      console.error("trash note call failed with status: ", res.status);
      toast.error("Oops! Failed to trash note!", {
        position: "bottom-center",
      });
    }
  } catch (err) {
    console.error("Error trashing note", err);
    toast.error("Oops! Failed to trash the note!", {
      position: "bottom-center",
    });
  } finally {
    setIsLoading(false);
  }
};

export const getAllTrash = async (dispatchData, setIsLoading, token) => {
  try {
    setIsLoading(true);
    const res = await axios({
      method: "get",
      url: "/api/trash",
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      dispatchData({ type: "SET_TRASH", payload: res.data.trash });
    } else {
      console.error("get all trash call failed with status: ", res.status);
    }
  } catch (err) {
    console.error("Error getting all trashed notes", err);
  } finally {
    setIsLoading(false);
  }
};

export const deleteFromTrash = async (
  note,
  dispatchData,
  setIsLoading,
  token
) => {
  try {
    setIsLoading(true);
    const res = await axios({
      method: "delete",
      url: `/api/trash/delete/${note._id}`,
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      dispatchData({ type: "SET_TRASH", payload: res.data.trash });

      toast.success("Note deleted from trash!!!", {
        position: "bottom-center",
      });

      return res.status;
    } else {
      console.error("delete from trash call failed with status: ", res.status);
      toast.error("Oops! Failed to delete from trash!", {
        position: "bottom-center",
      });
    }
  } catch (err) {
    console.error("Error deleting from trash", err);
    toast.error("Oops! Failed to delete from trash!", {
      position: "bottom-center",
    });
  } finally {
    setIsLoading(false);
  }
};

export const restoreFromTrash = async (
  note,
  dispatchData,
  setIsLoading,
  token
) => {
  try {
    setIsLoading(true);
    const res = await axios({
      method: "post",
      url: `/api/trash/restore/${note._id}`,
      headers: {
        authorization: token,
      },
    });

    if (res.status === 200) {
      dispatchData({ type: "SET_ALL_NOTES", payload: res.data.notes });

      dispatchData({ type: "SET_TRASH", payload: res.data.trash });

      toast.success("Note successfully restored!", {
        position: "bottom-center",
      });

      return res.status;
    } else {
      console.error("restore trash note call failed with status: ", res.status);
      toast.error("Oops! Failed to restore trashed note!", {
        position: "bottom-center",
      });
    }
  } catch (err) {
    console.error("Error restoring trashed note", err);
    toast.error("Oops! Failed to restore the trashed note!", {
      position: "bottom-center",
    });
  } finally {
    setIsLoading(false);
  }
};
