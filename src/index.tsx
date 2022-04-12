import React from "react";
import ReactDOM from "react-dom";
import  App  from "./components/App";
// import { store } from "./app/store";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
//import * as serviceWorker from './serviceWorker';
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
