import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Chip from '@mui/material/Chip';
import GoogleIcon from '@mui/icons-material/Google';
import vector from "./Vector.png"


// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

import AppleIcon from '@mui/icons-material/Apple';
import Polygon1 from "./Polygon1.png"
import Polygon2 from "./Polygon2.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChurchIcon from '@mui/icons-material/Church';
import Person2Icon from '@mui/icons-material/Person2';
import Groups2Icon from '@mui/icons-material/Groups2';


 import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';

// ============================|| JWT - REGISTER ||============================ //

export default function OnBoard() {
     const [clicked, setClicked] = useState(null);

      const navigate = useNavigate();

     const options = [

        {
            image:Polygon1,
            title:'Church',
            description:'Set up your account to manage events, community, and giving -all in one place',
            ArrowIcon:ArrowForwardIcon,
            id:1,
            icon:ChurchIcon

        },


            {
            image:Polygon2,
            title:'Christian Podcaster',
            description:'For creators sharing faith-based content through podcasts.',
            ArrowIcon:ArrowForwardIcon,
            id:2,
            icon:Person2Icon

        },



            {
            image:Polygon2,
            title:'Christian Interdemoninational group',
            description:'Great for Christian fellowships, ministries, or cross-church initiatives.',
            ArrowIcon:ArrowForwardIcon,
            id:3,
            icon:Groups2Icon

        },
     ]




       const  Go = ()=>{
 navigate('/Authentication');
  }




     
      const handleClick = (id) => {
        setClicked(id); 

        // setTimeout(()=>{
        //    navigate('/Authentication');

        // },1000)

    
      };











  return (
    <>


     <Grid size={12}>
          <Stack sx={{  alignItems:'center', justifyContent: 'center', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h4" color='black' fontWeight={900}>Join The Worsship Family!</Typography>
            <Typography variant="h6" color='#747583' fontSize={12} fontWeight={100} sx={{mt:2}}>Let’s get started by telling us which kind of faith <br/> platform you’re setting up. </Typography>
          </Stack>
        </Grid>


    
    
       
            <Grid container spacing={2.2} sx={{mt:5}}>

             {options.map((item)=>(
                
                 <Card
                    key={item.id}
          variant="outlined" 
          onClick={()=>handleClick(item.id)}
         
          sx={{
            width:370,
            border: '1px solid', 
            borderColor: clicked === item.id  ? 'primary.main' : 'grey.300', 
            cursor: 'pointer', 
            transition: 'border-color 0.3s ease', 
             backgroundColor: clicked === item.id  ? 'grey.100' : '', 
           
            boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1)'
           
          }}
        >
          <CardContent style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>

          <Stack>
            <img src={item.image} style={{width:40,height:40,  }}/>

             <Stack style={{color:'#2B04DB', position:'absolute', marginLeft:10, marginTop:10,   justifyContent:'center',  alignItems:'center', }}>
            {<item.icon style={{width:20, height:20, color:item.title === 'Church' ? 'white' : '#2B04DB'  }}/>}
          </Stack>

          </Stack>

          <Stack>
             <Typography style={{fontSize:13, color:'black', fontWeight:800}} >{item.title}</Typography>
            <Typography  style={{fontSize:11, marginTop:2, width:200}}>{item.description}</Typography>

          </Stack>

          <Stack style={{color:'#2B04DB'}}>
            {<item.ArrowIcon/>}
          </Stack>


           
          </CardContent>
        </Card>

             ))}

                             {clicked &&
             
                             <Grid size={12} sx={{ mt: 5 }}>
                                 <AnimateButton>
                                     <Button fullWidth size="large" variant="contained" style={{ backgroundColor: '#2B04DB', borderRadius: '30px' }} onClick={Go}>
                                         Proceed
                                     </Button>
                                 </AnimateButton>
                             </Grid>}

             
    

            </Grid>
      
   
    </>
  );
}
