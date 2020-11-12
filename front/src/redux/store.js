﻿import { createStore } from 'redux';
import rootReducer from './reducers/order';

/* eslint-disable no-underscore-dangle */
export default createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
