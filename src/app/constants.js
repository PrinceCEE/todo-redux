export const CREDENTIALS = "credentials";
export const TODOS = "todos";

export const loadDataFromStorage = (name) => {
  let item = localStorage.getItem(name);

  if (name === CREDENTIALS) {
    return item ? JSON.parse(item) : {};
  }
  return item ? JSON.parse(item) : [];
};
