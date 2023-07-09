import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { LoginForm } from "./loginForm/Form.jsx";
import "./index.css";
import { store } from "./store";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <LoginForm />
    </Provider>
  </React.StrictMode>
);
