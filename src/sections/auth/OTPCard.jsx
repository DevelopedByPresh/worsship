import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';

import image from "./background.png"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import indicator from "./indicator.png"
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

export default function OTPCard({ children, ...other }) {
  const theme = useTheme();

  return (
    <MainCard
      sx={{ flexDirection:'row', display:'flex', maxWidth: { xs: 400, sm: 475 }, margin: { xs: 2.5, md: 3 }, '& > *': { flexGrow: 1, flexBasis: '50%' } }}
      content={false}
      {...other}
      border={false}
      boxShadow
      shadow={theme.customShadows.z1}
    >


      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 },  }}>{children}</Box>
      
   

     
    </MainCard>
  );
}

OTPCard.propTypes = { children: PropTypes.any, other: PropTypes.any };
