import PropTypes from 'prop-types';

// material-ui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// project imports

import VerifyAccountCard from "./VerifyAccountCard"
import OTPCard from './OTPCard';

import Stack from '@mui/material/Stack';

// assets
import AuthBackground from './AuthBackground';
import image from "./background.png"

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

export default function OTPWrapper({ children }) {
  return (
    <Box sx={{ minHeight: '100vh',}}>
      {/* <AuthBackground /> */}
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid sx={{ px: 3, mt: 3 }} size={12}>
          {/* <Logo to="/" /> */}
        </Grid>
        <Grid size={12}>

    
          <Grid
            container
             // boxShadow
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 132px)' } }}
            >


       
              <OTPCard>
                    {children}
              </OTPCard>
           
           

          </Grid>



          
        </Grid>
        <Grid sx={{ p: 3 }} size={12}>
          {/* <AuthFooter /> */}
        </Grid>
      </Grid>
    </Box>
  );
}

OTPWrapper.propTypes = { children: PropTypes.node };
