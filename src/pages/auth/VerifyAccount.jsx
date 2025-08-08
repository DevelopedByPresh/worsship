import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports

import VerifyAccountWrapper from 'sections/auth/VerifyAccountWrapper';
import AuthVerifyAccount from 'sections/auth/AuthVerifyAccount';










export default function VerifyAccount() {



 
  
          useEffect(() => {
        
          document.body.style.zoom = '85%'; 
  
        }, [])





  return (





       <VerifyAccountWrapper >
        
      <Grid container spacing={2}>
    

     
        <Grid size={12}>
          <Stack sx={{  alignItems:'center', justifyContent: 'center', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h4" color='#191E24' fontWeight='900'>Verify Account</Typography>
            <Typography variant="h6" color='#454545' fontSize={12} fontWeight={100} >Select Your Preferred Authentication Channel.</Typography>
          </Stack>
        </Grid>

       
        <Grid size={12}>
        
          <AuthVerifyAccount />

     
        </Grid>
      </Grid>

  
    </VerifyAccountWrapper>


  

 



   
  );
}
