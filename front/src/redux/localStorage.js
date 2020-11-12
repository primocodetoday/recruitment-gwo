/* eslint-disable no-console */
export const loadStorage = () => {
  try {
    const serializedState = localStorage.getItem('order');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const saveStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('order', serializedState);
  } catch (err) {
    console.log(err);
  }
};
