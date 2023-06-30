import React from "react";
import "./App.css";
import SignInPage from "./Components/Sign-In-page/SignInPage";
import Home from "./Components/NavBar/Home";
// import NavBar from "./Components/NavBar/NavBar";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
// import SignUp from "./Components/Sign-In-page/SignUp";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/designSystem/.github.io/" element={<SignInPage/>}> </Route>
      <Route path="/designSystem/.github.io/home" element={<Home/>}> </Route>

      {/* <Route path="/signup" element={<SignUp/>}> </Route>  */}

     </Routes> 
     </BrowserRouter> 
  

    {/* <SignInPage/>
    <Home/> */}
    </>
  ); 
  
}

export default App;
