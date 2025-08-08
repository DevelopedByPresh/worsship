import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import AuthWrapper from 'sections/auth/AuthWrapper';
import CreatePasswordWrapper from 'sections/auth/CreatePasswordWrapper';
import FirebaseRegister from 'sections/auth/AuthRegister';
import AuthLogin from 'sections/auth/AuthLogin';
import AuthCreatePassword from 'sections/auth/AuthCreatePassword';
import Login from './Login';
import Button from '@mui/material/Button';

import image from "./background.png"



export default function CreatePassword() {

  const [option, setOption] = useState('signUp')
  const [bgColor, setBgColor] = useState('#2B04DB')


  const SignIn =()=>{
    setOption('signUp')
   
  

  }

  const Login =()=>{
    setOption('login')
    
 

  }

  
          useEffect(() => {
        
          document.body.style.zoom = '85%'; 
  
        }, [])





  return (





       <CreatePasswordWrapper >
        
      <Grid container spacing={2}>
    

     
        <Grid size={12}>
          <Stack sx={{  alignItems:'center', justifyContent: 'center', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h4" color='black' fontWeight={900}>Create your Password</Typography>
            <Typography variant="h6" color='#747583' fontSize={12} fontWeight={100} >Create a Password for your account.</Typography>
          </Stack>
        </Grid>

       
        <Grid size={12}>
        
          <AuthCreatePassword />

     
        </Grid>
      </Grid>

  
    </CreatePasswordWrapper>


  

 



   
  );
}
