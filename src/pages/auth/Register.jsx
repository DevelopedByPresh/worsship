import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import AuthWrapper from 'sections/auth/AuthWrapper';
import FirebaseRegister from 'sections/auth/AuthRegister';
import AuthLogin from 'sections/auth/AuthLogin';
import Login from './Login';
import Button from '@mui/material/Button';

import image from "./background.png"



export default function Register() {

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





       <AuthWrapper >
        
      <Grid container spacing={2}>
        {option === 'signUp' &&
        <Grid size={12}>
          <Stack sx={{ alignItems: 'baseline', alignItems:'center', justifyContent: 'center', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h4" color='black' fontWeight={900}>Create My Account!</Typography>
            <Typography variant="h6" color='#747583' fontSize={12} fontWeight={100} sx={{mt:2}}>To begin this Worsship journey, tell us what your <br/> platform is about.</Typography>
          </Stack>
        </Grid>}


         {option === 'login' &&
        <Grid size={12}>
          <Stack sx={{ alignItems: 'baseline', alignItems:'center', justifyContent: 'center', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h4" color='black' fontWeight={900}>Welcome Back!</Typography>
            <Typography variant="h6" color='#747583' fontSize={12} fontWeight={100} sx={{mt:2}}>Good to see you again. Let’s continue equipping your <br/> church to reach more souls, one service at a time.</Typography>
          </Stack>
        </Grid>}

        <Stack style={{flexDirection:'row', background:'#F1F2FF', justifyContent:'center', gap:10, alignItems:'center', margin:'0px auto'}} >
          <Button style={{backgroundColor:option === 'signUp' ?'#2B04DB' : "#ECF0FF", color:option === 'signUp' ? 'white' : '#42424A'}}  size="small" variant="contained"  onClick={SignIn}>
            Sign Up
          </Button>


          <Button  size="small" variant="contained" style={{backgroundColor:option === 'login' ? '#2B04DB' : "#ECF0FF", color:option === 'login' ? 'white' : '#42424A'}}  onClick={Login}>
           Log in
          </Button>
        </Stack>





        <Grid size={12}>
          {option === 'signUp' &&
          <FirebaseRegister />}

          {option === 'login' && <AuthLogin/> }
        </Grid>
      </Grid>

  
    </AuthWrapper>


  

 



   
  );
}
