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

import Step1Wrapper from 'sections/auth/Step1Wrapper';
import AuthStep1 from 'sections/auth/AuthStep1';
import Login from './Login';
import Button from '@mui/material/Button';

import image from "./background.png"



export default function Step1() {

 
  
          useEffect(() => {
        
          document.body.style.zoom = '85%'; 
  
        }, [])





  return (





       <Step1Wrapper >
        
      <Grid container spacing={2}>
    
        <Grid size={12}>
          <Stack sx={{  alignItems:'center', justifyContent: 'center', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h4" color='black' fontWeight={900}>Church Identity Information!</Typography>
            <Typography variant="h6" color='#747583' fontSize={12} fontWeight={100} sx={{mt:1}}>Verifying your church ensures trust, helps members <br/> find you faster, and unlocks all platform features</Typography>
          </Stack>
        </Grid>

          <Typography style={{position:'absolute', right:15, top:10, color:'#42424A', fontWeight:800}}>1 0f 4</Typography>


        <Grid size={12}>
        
          <AuthStep1 />

        </Grid>
      </Grid>

  
    </Step1Wrapper>


  

 



   
  );
}
