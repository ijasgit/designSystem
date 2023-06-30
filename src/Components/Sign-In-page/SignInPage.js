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
import { useNavigate } from "react-router";
import { AiOutlineEye } from "react-icons/ai";
import image from "../NavBar/Image/logo.png";
import "./signIn.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const defaultTheme = createTheme();

export default function SignInSide() {
  const theme = useTheme(); //media query of card
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs")); //media quary for card

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(data);
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.response);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (data) => {
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (username == "" && password == "") {
      alert("enter all details");
    } else {
      const bool = data.filter((item, index) => item.username === username);
      if (bool[0].username === username && bool[0].password === password) {
        navigate("/designSystem/.github.io/home");
      } else {
        console.log("error");
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
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
              />
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
              />
              <div className="aiOutlet-icon">
                <AiOutlineEye style={{ fontSize: "22px" }}></AiOutlineEye>
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
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
    </ThemeProvider>
  );
}
