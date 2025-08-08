import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports


import Step4Wrapper from 'sections/auth/Step4Wrapper';
import AuthStep4 from 'sections/auth/AuthStep4';
import Login from './Login';
import Button from '@mui/material/Button';

import image from "./background.png"



export default function Step4() {



  
          useEffect(() => {
        
          document.body.style.zoom = '85%'; 
  
        }, [])





  return (





       <Step4Wrapper >
        
      <Grid container spacing={2}>
    
        <Grid size={12}>
          <Stack sx={{ alignItems: 'baseline', alignItems:'center',  justifyContent: 'center', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h4" color='black' style={{ fontWeight:900, marginTop:15}} >Confirm Your Pledge</Typography>
            <Typography variant="h6" color='#747583' fontSize={12} fontWeight={100} sx={{mt:1}}>Please confirm you’re authorized to set this up on behalf of your church. This helps us keep the community safe and trustworthy.</Typography>
          </Stack>
        </Grid>

        <Typography style={{position:'absolute', right:15, top:10, color:'#42424A', fontWeight:800}}>4 0f 4</Typography>


        <Grid size={12}>
        
          <AuthStep4 />

        </Grid>
      </Grid>

  
    </Step4Wrapper>


  

 



   
  );
}
