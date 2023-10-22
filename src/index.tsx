import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/reducer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

//TODO 1: update git.io
//TODO: problem change to lowercase folder store/ACTION => store/action
// GitHub don't see changes
