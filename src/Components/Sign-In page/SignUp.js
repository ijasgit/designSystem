import  React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useState } from 'react';
// import Link from '@mui/joy/Link';
// import { IconName } from "react-icons/ci";
import axios from 'axios';
import { useNavigate } from 'react-router';
//
function ModeToggle() {
  
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

export default function SignUp() {
     const navigate = useNavigate()
    const [userValue, setUserValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleSubmit = async () => {
        alert('sing in')
    
        try {
          const response = await axios.post('/api/SignUp', {
            users: userValue,
            password: passwordValue, 
            
          });      
          console.log(response.data); 
          navigate('/')
         
        } catch (error) {
          console.error(error);
        }
      };

    
  
  return (
    <CssVarsProvider>
      <main>
        <ModeToggle />
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign-up in to continue.</Typography>
          </div>
          <form >
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder= "Enter Email id "
              onChange={(e) => setUserValue(e.target.value)}
                value={userValue}
              
            
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPasswordValue(e.target.value)}
              value={passwordValue}
          
            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }} onClick={handleSubmit}>Save</Button> 

          </form>

         
         
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}