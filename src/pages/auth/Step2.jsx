import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports


import Step2Wrapper from 'sections/auth/Step2Wrapper';
import AuthStep2 from 'sections/auth/AuthStep2';
import Login from './Login';
import Button from '@mui/material/Button';

import image from "./background.png"



export default function Step2() {



  
          useEffect(() => {
        
          document.body.style.zoom = '85%'; 
  
        }, [])





  return (





       <Step2Wrapper >
        
      <Grid container spacing={2}>
    
        <Grid size={12}>
          <Stack sx={{ alignItems: 'baseline', alignItems:'center', justifyContent: 'center', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h4" color='black' style={{ fontWeight:900}} >Primary Contact Details</Typography>
            <Typography variant="h6" color='#747583' fontSize={12} fontWeight={100} sx={{mt:1}}>We’ll use this information to communicate verification <br /> updates and platform features with your leadership team.</Typography>
          </Stack>
        </Grid>

        <Typography style={{position:'absolute', right:15, top:10, color:'#42424A', fontWeight:800}}>2 0f 4</Typography>


        <Grid size={12}>
        
          <AuthStep2 />

        </Grid>
      </Grid>

  
    </Step2Wrapper>


  

 



   
  );
}
