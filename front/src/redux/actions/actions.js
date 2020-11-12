import { ADD_BOOK } from './actionTypes';

export const addBook = (id) => {
  return {
    type: ADD_BOOK,
    payload: {
      id,
      quantity: 1,
    },
  };
};
