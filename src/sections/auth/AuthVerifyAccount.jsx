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

export default function AuthVerifyAccount() {
     const [clicked, setClicked] = useState(null);

      const navigate = useNavigate();

     const options = [

        {
          
            title:'Email',
          
            id:1,
         

        },


            {
      
            title:'Phone Number',
         
            id:2,

        },

     ]



     
      const handleClick = (id) => {
        setClicked(id); 

        // setTimeout(()=>{
        //    navigate('/OTP');

        // },1000)

    
      };



      
     
      const GO = () => {
  
           navigate('/Authentication/OTP');

  
      };











  return (
    <>


   


    
    
       
            <Grid container spacing={2.2} sx={{mt:5}}>

             {options.map((item)=>(
                
                 <Card
                    key={item.id}
          variant="outlined" 
          onClick={()=>handleClick(item.id)}
         
          sx={{
            width:170,
            border: '1px solid', 
            borderColor: clicked === item.id  ? 'primary.main' : 'grey.300', 
            cursor: 'pointer', 
            transition: 'border-color 0.3s ease', 
             backgroundColor: clicked === item.id  ? 'grey.100' : '', 
           
            boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1)',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            margin:'0px auto'
           
          }}
        >
          <CardContent style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>


          <Stack style={{alignItems:'center', margin:'0px auto',  textAlign:'center',}}>
             <Typography style={{fontSize:13, color:'black',  fontWeight:800}} >{item.title}</Typography>

          </Stack>


          

        
          </CardContent>



          
        </Card>

             ))}



             
              <Grid size={12}>
                <AnimateButton>
                  <Button fullWidth size="large" variant="contained" style={{ backgroundColor: '#F1F2FF', color: '#5E5F6B', fontSize: 11, borderRadius: '10px', marginTop: 5 }}>
                     We will sent a 6- digit verification to your registered email
                  </Button>
                </AnimateButton>
              </Grid>



        

            <Grid size={12}>
              <AnimateButton>
                <Button fullWidth size="large" variant="contained" style={{ backgroundColor: '#2B04DB', borderRadius: '30px' }} onClick={GO} >
                  Verify
                </Button>
              </AnimateButton>

            </Grid>

             
    

            </Grid>
      
   
    </>
  );
}
