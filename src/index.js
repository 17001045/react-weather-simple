import "./styles/main.scss";
import ReactDOM from "react-dom";
import React from "react";
import store from "./app/redux/store";
import { Provider } from "react-redux";

import App from "./app/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
