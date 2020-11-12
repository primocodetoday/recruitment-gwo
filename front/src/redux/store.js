import { createStore } from 'redux';
import orderReducer from './reducers/order';
import { loadStorage } from './localStorage';

const persistedState = loadStorage();

/* eslint-disable no-underscore-dangle */
export default createStore(
  orderReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
