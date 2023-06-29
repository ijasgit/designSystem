import * as React from "react";
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
import "./signIn.css";
// impo[rt "../NavBar/NavBar.css"
import image from "../NavBar/Image/logo.png";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "80vh", mt: 8 }}>
        <CssBaseline />
        <Grid
          component={Paper}
          elevation={5}
          square
          item
          xs={false}
          sm={3}
          md={6}
          sx={{
            //  border:"solid",
            backgroundColor: "#EBF8FD",
            // backgroundImage: `url(${image})`,
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center center",
            // opacity: 0.9,
            // filter: "brightness(0.9)",
            //  height: "300px",
          }}
        >
          <div
            style={{
              display:'flex',
              position:'relative',
              backgroundImage: `url(${image})`,
              height: "70%",
              width:"70%",
              top: "45px",
              left: "56px",          
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              opacity: 0.9,
              
            
            }}
          >
           
          </div>
        </Grid>

        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={5} square>
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
                style={{ backgroundColor: "#F7FCFD" }}
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
                style={{ backgroundColor: "#F7FCFD" }}
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
