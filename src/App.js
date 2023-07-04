import React from "react";
import "./App.css";
import SignInPage from "./Components/Sign-In-page/SignInPage";
import Home from "./Components/NavBar/Home";
// import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabs from "./Stories/Tabs/TabComp";
// import SignUp from "./Components/Sign-In-page/SignUp";
import Software from "./Components/SoftwareAsService/Software";
import SideNav from "./Components/NavBar/SideNav";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="main-div">
        <SideNav />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <NavBar />
          <div>
            <div>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<SignInPage />}>                
                  </Route>
                  <Route path="/home" element={<Home />}>                  
                  </Route>
                  <Route path="/tabs" element={<Tabs />}>
                  </Route>
                  <Route path="/software" element={<Software />}></Route>
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
