import "./App.css";
import SignInPage from "./Components/Sign-In page/SignInPage";
// import Home from "./Components/NavBar/Home";
// import NavBar from "./Components/NavBar/NavBar";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from "./Components/Sign-In page/SignUp";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInPage/>}> </Route>
      <Route path="/signup" element={<SignUp/>}> </Route> 

    </Routes>  
    </BrowserRouter>
      {/* <Home/> */}
      {/* <SignInPage/> */}
    </>
  );
}

export default App;
