// Store Data in Local Browser
export const setToLS = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}

// Retrieve Data from Local Browser
export const getFromLS = key => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
}