import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports


import OTPWrapper from 'sections/auth/OTPWrapper';
import AuthOTP from 'sections/auth/AuthOTP';










export default function OTP() {



 
  
          useEffect(() => {
        
          document.body.style.zoom = '90%'; 
  
        }, [])





  return (





       <OTPWrapper >
        
      <Grid container spacing={2}>
    

     
        <Grid size={12}>
          <Stack sx={{ alignItems: 'baseline', alignItems:'center', justifyContent: 'center', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h4" color='#191E24' fontWeight='900'>Verify Account</Typography>
            <Typography variant="h6" color='#454545' fontSize={12} fontWeight={100} >Enter the 6-digit verification sent to your Email Address.</Typography>
          </Stack>
        </Grid>

       
        <Grid size={12}>
        
          <AuthOTP />

     
        </Grid>
      </Grid>

  
    </OTPWrapper>


  

 



   
  );
}
