import React from "react";
import "./App.css";
import SignInPage from "./Components/Sign-In-page/SignInPage";
import Home from "./Components/NavBar/Home";
// import NavBar from "./Components/NavBar/NavBar";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Tabs from "./Stories/Tabs/TabComp";
// import SignUp from "./Components/Sign-In-page/SignUp";
import Software from "./Components/SoftwareAsService/Software";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInPage/>}> </Route>
      <Route path="/home" element={<Home/>}> </Route>
      <Route path="/tabs" element={<Tabs/>}> </Route>
      <Route  path="/software" element={<Software/>}></Route>


      {/* <Route path="/signup" element={<SignUp/>}> </Route>  */}

     </Routes> 
     </BrowserRouter> 
  

    {/* <SignInPage/>
    <Home/> */}
    </>
  ); 
  
}

export default App;
