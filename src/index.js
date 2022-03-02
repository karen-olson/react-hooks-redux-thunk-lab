import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import catsReducer from "./features/cats/catsSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(catsReducer, composedEnhancer);

ReactDOM.render(
  // import the reducer we made
  // use createStore from redux to initialize the store, passing in the reducer
  // use Provider from react-redux to make the store available to the react app
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
