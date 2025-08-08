import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useEffect } from 'react';

// project imports
import MainCard from 'components/MainCard';



export default function AllStreams() {

  
          useEffect(() => {
        
         
  
          if(window.innerWidth <= 768){
            document.body.style.zoom = '55%'; 
          }else{
             document.body.style.zoom = '44%'; 
  
          }
  
        }, [window])
  
  
 

  return (

  <Stack style={{justifyContent:'center', alignItems:'center',position:'absolute', top:0, left:0, bottom:0, right:0, margin:'auto'}}>
      <Typography variant='h2'>LiveStream Page is Under Construction!!</Typography>


  </Stack>
    
  
  );
}

