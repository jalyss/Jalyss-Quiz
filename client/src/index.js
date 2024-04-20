import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Routers";
import {Provider} from "react-redux"
import { store } from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <ToastContainer />
      <Router />
    </Provider>
  //</React.StrictMode> 
);
