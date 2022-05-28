export const setLocalStorage = (key, data, convertToString) => {
  try {
    if (convertToString) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  } catch (error) {
    throw new Error("Error while setting local storage!");
  }
};

export const removeLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch {
    throw new Error("Error while removing item from Local storage!");
  }
};

export const getLocalStorage = (key, parseData) => {
  try {
    if (parseData) {
      return JSON.parse(localStorage.getItem(key));
    }

    return localStorage.getItem(key);
  } catch {
    throw new Error("Error while getting item from Local storage!");
  }
};
