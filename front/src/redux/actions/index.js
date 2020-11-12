import { ADD_BOOK, REMOVE_BOOK, RESET_ORDER, RECEIVER_CHANGE } from './actionTypes';

export const addBook = (id) => {
  return {
    type: ADD_BOOK,
    payload: {
      id,
      quantity: 1,
    },
  };
};
export const removeBook = (id) => {
  return {
    type: REMOVE_BOOK,
    payload: {
      id,
    },
  };
};

export const resetOrder = () => {
  return {
    type: RESET_ORDER,
  };
};
export const receiverChange = (name, value) => {
  return {
    type: RECEIVER_CHANGE,
    payload: { [name]: value },
  };
};
