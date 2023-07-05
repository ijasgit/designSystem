import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import  userReducer  from "./Components/Featuers/User";
import softwareReducer from "./Components/Featuers/SoftwareSlice"
import SignInPage from "./Components/Sign-In-page/SignInPage"
// import Node from "./Node";
// import SignInSide from "../src/Components/Sign-In-page/SignInPage";

const root = ReactDOM.createRoot(document.getElementById("root"));


const store = configureStore({
  reducer: {
    users: userReducer,
    software:softwareReducer,

  },
});


root.render(
  <React.StrictMode>
    <Provider store={store}>
 {(window.location.pathname)==="/" ? <SignInPage/> :<App/> }
      
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

console.log(window.location.pathname)