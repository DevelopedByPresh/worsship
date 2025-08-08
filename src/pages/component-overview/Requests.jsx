import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';
import { useEffect } from 'react';



export default function Requests() {

  
          useEffect(() => {
        
         
  
          if(window.innerWidth <= 768){
            document.body.style.zoom = '55%'; 
          }else{
             document.body.style.zoom = '44%'; 
  
          }
  
        }, [window])
  
  
 

  return (

 <Stack style={{justifyContent:'center', alignItems:'center',position:'absolute', top:0, left:0, bottom:0, right:0, margin:'auto'}}>
      <Typography variant='h2'>Requests Page is Under Construction!!</Typography>


  </Stack>
  );
}

