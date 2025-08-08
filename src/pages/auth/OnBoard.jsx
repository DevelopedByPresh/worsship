import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import AuthWrapper from 'sections/auth/AuthWrapper';
import OnBoardWrapper from 'sections/auth/OnBoardWrapper';
import FirebaseRegister from 'sections/auth/AuthRegister';
import OnBoard from 'sections/auth/OnBoard';
import AuthLogin from 'sections/auth/AuthLogin';
import Login from './Login';
import Button from '@mui/material/Button';


import image from "./background.png"



export default function OnBoarding() {



  
          useEffect(() => {
        
          document.body.style.zoom = '85%'; 
  
        }, [])





  return (





       <OnBoardWrapper >
        
      <Grid container spacing={2}>
      


     
        <Grid size={12}>
          <Stack sx={{ alignItems: 'baseline', alignItems:'center', justifyContent: 'center', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h4" color='black' fontWeight={900}>Join The Worsship Family!</Typography>
            <Typography variant="h6" color='#747583' fontSize={12} fontWeight={100} sx={{mt:2}}>Let’s get started by telling us which kind of faith <br/> platform you’re setting up. </Typography>
          </Stack>
        </Grid>






        <Grid size={12}>
      
          <OnBoard />

     
        </Grid>
      </Grid>

  
    </OnBoardWrapper>


  

 



   
  );
}
