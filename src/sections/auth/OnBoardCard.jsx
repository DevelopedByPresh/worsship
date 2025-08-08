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
import OnBoard from './OnBoard';

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

export default function OnBoardCard({ children, ...other }) {
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

             <Stack style={{position:'absolute', bottom:130, left:30, flexDirection:'row', gap:10, alignItems:'center'}}>
                <img src={indicator} alt=""  style={{height:5, width:40}}/>
        </Stack>


          <Stack style={{position:'absolute', bottom:80, left:30, flexDirection:'row', gap:10, alignItems:'center'}}>
                <Typography color='#FFFFFF'>Welcome to Worsship</Typography>
        </Stack>

            <Stack style={{position:'absolute', bottom:50, left:30, flexDirection:'row', gap:10, alignItems:'center'}}>
           
                <Typography color='#FFFFFF'>Discover . Connect . Worship</Typography>
        </Stack>

        

      </Stack>

      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 },  }}>
        <OnBoard/>
        </Box>
      
   

     
    </MainCard>
  );
}

OnBoardCard.propTypes = { children: PropTypes.any, other: PropTypes.any };
