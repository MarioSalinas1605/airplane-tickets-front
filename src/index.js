import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import { createStore, compose } from "redux";
import reducer from "./reducers/index.js";
import App from './App';

import './index.css';

const initialState = {
  cities: [],
  flights: [],
  reservations: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
