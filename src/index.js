import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import  userReducer  from "./Components/Featuers/User";
import Node from "./Node";

const root = ReactDOM.createRoot(document.getElementById("root"));


const store = configureStore({
  reducer: {
    users: userReducer,

  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Node/>
      
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
