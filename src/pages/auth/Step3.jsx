import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports


import Step3Wrapper from 'sections/auth/Step3Wrapper';
import AuthStep3 from 'sections/auth/AuthStep3';
import Login from './Login';
import Button from '@mui/material/Button';

import image from "./background.png"



export default function Step2() {



  
          useEffect(() => {
        
          document.body.style.zoom = '85%'; 
  
        }, [])





  return (





       <Step3Wrapper >
        
      <Grid container spacing={2}>
    
        <Grid size={12}>
          <Stack sx={{ alignItems: 'baseline', alignItems:'center',  justifyContent: 'center', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h4" color='black' style={{ fontWeight:900, marginTop:15}} >Upload Verification Documents</Typography>
            <Typography variant="h6" color='#747583' fontSize={12} fontWeight={100} sx={{mt:1}}>These help speed up verification and add credibility to your <br/> church’s profile. Don’t worry — you can skip and add them later.</Typography>
          </Stack>
        </Grid>

        <Typography style={{position:'absolute', right:15, top:10, color:'#42424A', fontWeight:800}}>3 0f 4</Typography>


        <Grid size={12}>
        
          <AuthStep3 />

        </Grid>
      </Grid>

  
    </Step3Wrapper>


  

 



   
  );
}
