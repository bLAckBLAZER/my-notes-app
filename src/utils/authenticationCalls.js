import axios from "axios";
import { removeLocalStorage, setLocalStorage } from "./localStorageCalls";

export const userLogin = async (
  event,
  dispatch,
  dispatchData,
  email,
  password,
  navigate,
  gotoPath
) => {
  event.preventDefault();

  try {
    const res = await axios.post("/api/auth/login", {
      email,
      password,
    });

    if (res?.status === 200 || res?.status === 201) {
      const { foundUser, encodedToken } = res.data;

      dispatch({ type: "LOGIN", payload: { foundUser, encodedToken } });

      setLocalStorage("token", encodedToken);
      setLocalStorage("user", foundUser, true);

      dispatchData({ type: "SET_ALL_NOTES", payload: foundUser.notes });
      dispatchData({ type: "SET_TRASH", payload: foundUser.trash });

      navigate(gotoPath);
    }
  } catch (err) {
    throw new Error("Error in logging in! " + err);
  }
};

export const userLogout = (dispatchAuth, dispatchData, navigate) => {
  try {
    removeLocalStorage("token");
    removeLocalStorage("user");

    dispatchAuth({ type: "LOGOUT" });
    dispatchData({ type: "RESET" });
    navigate("/");
  } catch {
    throw new Error("Logout failed");
  }
};

export const userSignup = async (
  event,
  { firstName, lastName, email, password },
  dispatch,
  dispatchData,
  navigate
) => {
  event.preventDefault();

  try {
    const res = await axios.post("/api/auth/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    if (res?.status === 200 || res?.status === 201) {
      const { createdUser: foundUser, encodedToken } = res.data;

      dispatch({ type: "LOGIN", payload: { foundUser, encodedToken } });

      setLocalStorage("token", encodedToken);
      setLocalStorage("user", foundUser, true);

      dispatchData({ type: "SET_ALL_NOTES", payload: foundUser.notes });
      dispatchData({ type: "SET_TRASH", payload: foundUser.trash });

      navigate("/");
    }
  } catch (err) {
    console.error(err);
  }
};
