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

import Modal from '@mui/material/Modal';


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

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import OtpInput from 'react-otp-input';

import Ellipse from "./Ellipse.png"
import circleCheck from "./circleCheck.png"
import pages from "./pages.png"


import ClearIcon from '@mui/icons-material/Clear';


 import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';

// ============================|| JWT - REGISTER ||============================ //

export default function AuthOTP() {
     const [clicked, setClicked] = useState(null);

      const navigate = useNavigate();
      const [otp, setOtp] = useState('');

        const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


const style = {
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};




     
      const handleClick = () => {
     

           navigate('/Authentication/Personalization');

       

    
      };











  return (
    <>





 <div>
      
      <Modal
        open={open}
        onClose={handleClose}
          aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop
    
      >
        <Box sx={style}>
            <Stack style={{justifyContent:'center', alignItems:'center',  marginTop:-60 }}>
                <Stack>
                      <img src={Ellipse} style={{width:120, height:120}}/>
                 <img src={pages} style={{width:80, height:60, position:'absolute', top:5, left:160}}/>
                 <img src={circleCheck} style={{width:25, height:25, position:'absolute', top:55, left:230}}/>
                </Stack>
               
            </Stack>

            <ClearIcon style={{position:'absolute', cursor:'pointer', right:20, top:15, width:25, height:25}} onClick={handleClose}/>
           
          <Typography id="modal-modal-title" style={{textAlign:'center', marginTop:20}} variant="h4" component="h2">
            Account Verified!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your Worsship account has been Verified. Please <br/> complete your profile to have full access to all features.
          </Typography>

             <Grid size={12} sx={{mt:5}}>
              <AnimateButton>
                <Button fullWidth size="large" variant="contained" style={{ backgroundColor: '#2B04DB', borderRadius: '30px' }}  onClick={handleClick}>
                  Verify
                </Button>
              </AnimateButton>

            </Grid>

               <Typography id="modal-modal-description" sx={{ mt: 2, textAlign:'center', cursor:'pointer' }}>
                   Skip For Now
          </Typography>
        </Box>
      </Modal>
    </div>
   


    
    
       
            <Grid container spacing={2.2} sx={{mt:1}}>

                
        
          <CardContent style={{display:'flex', margin:'0px auto', justifyContent:'space-between', alignItems:'center'}}>


                  <OtpInput
                  
                      value={otp}
                      onChange={setOtp}
                      inputStyle={{width:40, height:40}}
                      containerStyle={{color:'#2B04DB'}}
                      numInputs={6}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props} />}
                  />




     


          

        
          </CardContent>



          
     

       



             
              <Grid size={12}>
                <AnimateButton>
                  <Button fullWidth size="large" variant="contained" style={{ backgroundColor: '#F1F2FF', color: '#5E5F6B', fontSize: 11, borderRadius: '10px', marginTop: 5 }}>
                  <ErrorOutlineIcon style={{color:'#2B04DB', marginRight:9, width:11, height:11}}/>   Didn’t get a code in your email address?  <Typography color='#2B04DB' style={{fontSize:11, marginLeft:3}}> Resend code</Typography>
                  </Button>
                </AnimateButton>
              </Grid>



        

            <Grid size={12}>
              <AnimateButton>
                <Button fullWidth size="large" variant="contained" style={{ backgroundColor: '#2B04DB', borderRadius: '30px' }}  onClick={handleOpen}>
                  Verify
                </Button>
              </AnimateButton>

            </Grid>

             
    

            </Grid>
      
   
    </>
  );
}
