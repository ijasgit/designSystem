import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HeadingPoppins from "./Stories/Typography/Heading-poppins/HeadingPoppins";
import TitlePoppins from "./Stories/Typography/Tiltle-poppins/TitlePoppins";
import SUBTITLE1 from "./Stories/Typography/SUBTITLE1-POPPINS/SUBTITLE1";
import Subtitle2 from "./Stories/Typography/Subtitle2-poppins/Subtitle2";
import BodyLato from "./Stories/Typography/Body-Lato/BodyLato";
import Caption1Lacto from "./Stories/Typography/Caption 1 - Lato/Caption1Lacto";
import Caption2Lacto from "./Stories/Typography/Caption 2 -  Lacto/Caption2Lacto";
import Button1Poppins from "./Stories/Typography/Button 1 -poppins/Button1Poppins.js";
import { HashRouter, Route, Routes } from "react-router-dom";
import Buttons from "./Stories/Buttons/Buttons";
import LinkLato from "./Stories/Typography/Link-Lato/LinkLato";
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
      <LinkLato/>
      <Buttons
  label="Primary Button"
  variant="secondary"
/>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
