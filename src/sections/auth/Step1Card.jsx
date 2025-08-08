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
import Base1 from "./Base1.png"
import Base2 from "./Base2.png"
import Base3 from "./Base3.png"
import Base4 from "./Base4.png"

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

export default function Step1Card({ children, ...other }) {
  const theme = useTheme();

  return (
    <MainCard
      sx={{ flexDirection:'row', display:'flex', maxWidth: { xs: 400, sm: 875 }, margin: { xs: 2.5, md: 3 }, '& > *': { flexGrow: 1, flexBasis: '50%' } }}
      content={false}
      {...other}
      border={false}
      boxShadow
      shadow={theme.customShadows.z1}
    >

      <Stack sx={{ display: { xs:'none', sm: 'none', md: 'none', lg: 'block' },  }}  >
        <img src={image} alt=""  style={{height:'100vh'}}/>

        <Stack style={{position:'absolute', top:25, left:30, flexDirection:'row', gap:10, alignItems:'center'}}>
                <img src={logo1} alt=""  style={{height:40, width:40}}/>
                <img src={logo2} alt=""  style={{height:20, width:100}}/>

        </Stack>

             <Stack style={{position:'absolute', top:160, left:30,  gap:3, alignItems:'center'}}>
                  <Typography color='#FFFFFF'>Hi! House of the Rock Lagos Nigeria  </Typography>
                     <Typography color='#FFFFFF' style={{fontSize:11}}>Complete your profile in 4 quick steps</Typography>
        </Stack>


          <Stack style={{position:'absolute', top:230, left:30, flexDirection:'row', gap:10, alignItems:'center'}}>
                <img src={Base1} alt=""  style={{height:50, width:350}}/>
        </Stack>

          <Stack style={{position:'absolute', top:290, left:32, flexDirection:'row', gap:10, alignItems:'center'}}>
                      <img src={Base2} alt=""  style={{height:50, width:350}}/>
        </Stack>

          <Stack style={{position:'absolute', top:350, left:32, flexDirection:'row', gap:10, alignItems:'center'}}>
                <img src={Base3} alt=""  style={{height:50, width:350}}/>
        </Stack>



        
          <Stack style={{position:'absolute', top:410, left:32, flexDirection:'row', gap:10, alignItems:'center'}}>
                <img src={Base4} alt=""  style={{height:50, width:350}}/>
        </Stack>
      </Stack>

      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 },  }}>{children}</Box>
      
   

     
    </MainCard>
  );
}

Step1Card.propTypes = { children: PropTypes.any, other: PropTypes.any };
