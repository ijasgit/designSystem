import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AiOutlineEye } from "react-icons/ai";
import image from "../NavBar/Image/logo.png";
import "./signIn.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultTheme = createTheme();

export default function SignInSide() {
  const theme = useTheme(); //media query of card
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs")); //media quary for card

  const [data, setData] = useState([]);

  // useEffect(() => {

  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("/api/data");
  //     setData(response.data);
  //     console.log(response.data)
  //   } catch (error) {
  //     console.error("Error fetching data:", error.response);
  //   }
  // };
const[usercond,setusercond]=useState(false)
const[passwordcond,setpasscond]=useState(false)
const[invalidEmail,setinvalidEmail]=useState(false)
const[invalidpassword,setinvalidpassword]=useState(false)


  const handleSubmit = async () => {
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    console.log(username, password, "got it");
    if(username&&password){
      const response = await axios.post("/api/login", {
        username: username,
        password: password,
      });
      let isValid = response.data.cond;
      console.log(response, isValid);
      if (isValid) {
       
        window.location.replace("/home");
      } else {
        if (response.data.message == "Incorrect password") {
          // alert("Incorrect password");
         
         setinvalidpassword(true)
        
      }
        else {
          // alert(response.data.message); 
          setinvalidEmail(true)
       
        }
      }
    }
    else{
      if(username==""){
        setusercond(true)
      }
      if(password==""){
        setpasscond(true)
      }
    }
  
  };

  // handleSubmit(data);
  return (
    <div><ThemeProvider theme={defaultTheme}>
    <Grid
      container
      component="main"
      sx={{
        height: "80vh",
        mt: 8,
        boxSizing: " border-box",
        display: "webkit-box",
        marginLeft: isXsScreen ? 5 : "115px",
      }}
    >
      <CssBaseline />
      <Grid
        component={Paper}
        elevation={5}
        square
        item
        xs={false}
        sm={false}
        md={6}
        sx={{
          backgroundColor: "#EBF8FD",
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "relative",
            backgroundImage: `url(${image})`,
            height: "70%",
            width: "70%",
            top: "45px",
            left: "110px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            opacity: 0.7,
          }}
        ></div>
      </Grid>

      <Grid
        item
        xs={10}
        sm={7}
        md={4}
        component={Paper}
        elevation={5}
        square
        sx={{
          borderTopRightRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
                 <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Id"
              name="email"
              autoComplete="email"
              autoFocus
              style={{
                // border:"solid",
                // height:'2vh',
                backgroundColor: "#F7FCFD",
              }}
              onChange={()=>{
                if(document.getElementById("email")!==""){
                  setusercond(false)
                  setinvalidEmail(false)
                }
               
              }}
            />
          <span>{usercond?<span style={{color:"red",paddingLeft:"10px",fontSize:"12px"}}>*Enter E-mail</span>:null}</span>  
          <span>{invalidEmail?<span style={{color:"red",paddingLeft:"10px",fontSize:"12px"}}>*Invalid E-mail</span>:null}</span>  

            
    
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              style={{
                backgroundColor: "#F7FCFD",

              }}
              onChange={()=>{
                if(document.getElementById("password")!==""){
                  setpasscond(false)
                  setinvalidpassword(false)
                }
               
              }}
            />
             <span>{passwordcond?<span style={{color:"red",paddingLeft:"10px",fontSize:"12px"}}>*Enter password</span>:null}</span>  
             <span>{invalidpassword?<span style={{color:"red",paddingLeft:"10px",fontSize:"12px"}}>*Incorrect password</span>:null}</span>  


            <div className="aiOutlet-icon">
              <AiOutlineEye style={{ fontSize: "22px" }}></AiOutlineEye>
            </div>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleSubmit(data)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{ alignItems: "end" }}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
    <ToastContainer />
  </ThemeProvider>
  </div>
    
  );
}
