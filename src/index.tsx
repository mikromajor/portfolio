import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./store/reducer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
//import * as serviceWorker from './serviceWorker';
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
