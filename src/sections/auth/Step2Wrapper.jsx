import PropTypes from 'prop-types';

// material-ui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// project imports
import AuthFooter from 'components/cards/AuthFooter';
import Logo from 'components/logo';
import Step2Card from './Step2Card';
import Stack from '@mui/material/Stack';

// assets
import AuthBackground from './AuthBackground';
import image from "./background.png"


export default function Step2Wrapper({ children }) {
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


       
              <Step2Card>
                    {children}
              </Step2Card>
           
           

          </Grid>



          
        </Grid>
        <Grid sx={{ p: 3 }} size={12}>
          {/* <AuthFooter /> */}
        </Grid>
      </Grid>
    </Box>
  );
}

Step2Wrapper.propTypes = { children: PropTypes.node };
