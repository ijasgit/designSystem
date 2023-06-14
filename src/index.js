import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HeadingPoppins from "./Typography/Heading-poppins/HeadingPoppins";
import TitlePoppins from "./Typography/Tiltle-poppins/TitlePoppins";
import SUBTITLE1 from "./Typography/SUBTITLE1-POPPINS/SUBTITLE1";
import Subtitle2 from "./Typography/Subtitle2-poppins/Subtitle2";
import BodyLato from "./Typography/Body-Lato/BodyLato";
import Caption1Lacto from "./Typography/Caption 1 - Lato/Caption1Lacto";
import Caption2Lacto from "./Typography/Caption 2 -  Lacto/Caption2Lacto";
import Button1Poppins from "/home/oem/Documents/archimedis/design/src/Typography/Button 1 -poppins/Button1Poppins.js";
import { HashRouter, Route, Routes } from "react-router-dom";
import Buttons from "./Buttons/Buttons";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <HeadingPoppins />
      <TitlePoppins />
      <SUBTITLE1 />
      <Subtitle2 />
      <BodyLato />
      <Caption1Lacto />
      <Caption2Lacto />
      <Button1Poppins />
      <Buttons />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
