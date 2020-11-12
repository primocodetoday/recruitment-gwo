/* eslint-disable no-case-declarations */
/* eslint-disable no-console */
import { deepStateAdd, deepStateSub } from './reducerHelpers';

import { REMOVE_BOOK, ADD_BOOK, RECEIVER_CHANGE, RESET_ORDER } from '../actions/actionTypes';

const initialState = {
  order: [],
  first_name: '',
  last_name: '',
  city: '',
  zip_code: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      if (state.order.find((item) => item.id === action.payload.id && item.quantity > 1)) {
        console.log('Book in order, subtracting quantity');
        return { ...state, order: deepStateSub(state, action) };
      }
      console.log('Book deleted');
      return {
        ...state,
        order: [...state.order.filter((item) => item.id !== action.payload.id)],
      };
    case ADD_BOOK:
      if (state.order.find((item) => item.id === action.payload.id)) {
        console.log('Book in order, adding quantity');
        return { ...state, order: deepStateAdd(state, action) };
      }
      console.log('New Book added');
      return { ...state, order: [...state.order, action.payload] };
    case RECEIVER_CHANGE:
      return { ...state, ...action.payload };
    case RESET_ORDER:
      return { ...initialState };
    default:
      return state;
  }
};
