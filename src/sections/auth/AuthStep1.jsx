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


import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import AppleIcon from '@mui/icons-material/Apple';

// ============================|| JWT - REGISTER ||============================ //

export default function AuthStep1() {
  const navigate = useNavigate()
     const [country, setCountry] = useState('');
     const [state, setState] = useState('');
     const [denomination, setDenomination] = useState('');
     const [style, setStyle] = useState('');
     const [language, setLanguage] = useState('');

  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);


  const  Go = ()=>{
 navigate('/Authentication/Personalization/step2');
  }




  const handleChangeState = (event) => {
    setState(event.target.value);
  };


  
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };


    const handleChangeDenomination = (event) => {
    setDenomination(event.target.value);
  };


    const handleChangeStyle = (event) => {
    setStyle(event.target.value);
  };


    const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };



  












  return (
    <>
    
          <form >
            <Grid container spacing={3}>
             
          
              <Grid size={12} sx={{mt:1}}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="company-signup" style={{fontSize:10}}>Legal Name/Organization name</InputLabel>
                  <OutlinedInput
                    id="company-signup"
                    name="company"
                    placeholder="Enter your Organization name"
                  />
                </Stack>
             
              </Grid>

           <Stack style={{flexDirection:'row', justifyContent:'center', margin:'0px auto', gap:5}}>

          
                  <Box sx={{ minWidth: 180 }}>
                      <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Country</InputLabel>
                          <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={country}
                              label="Country"
                              onChange={handleChangeCountry}
                          >
                              <MenuItem value={10}>Nigeria</MenuItem>
                              <MenuItem value={20}>Ghana</MenuItem>
                              <MenuItem value={30}>Egypy</MenuItem>
                              <MenuItem value={30}>Congo</MenuItem>
                              <MenuItem value={30}>Liberia</MenuItem>
                          </Select>
                      </FormControl>
                  </Box>




                   <Box sx={{ minWidth: 180 }}>
                      <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">State</InputLabel>
                          <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={state}
                              label="state"
                              onChange={handleChangeState}
                          >
                              <MenuItem value={10}>Abia</MenuItem>
                              <MenuItem value={20}>Lagos</MenuItem>
                              <MenuItem value={30}>Kwara</MenuItem>
                              <MenuItem value={30}>Enugu</MenuItem>
                              <MenuItem value={30}>Kano</MenuItem>
                          </Select>
                      </FormControl>
                  </Box>

     </Stack>

              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="email-signup" style={{fontSize:10}}>Address</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="email-login"
                    type="text"
                    name="email"
                    placeholder="Address"
                  />
                </Stack>
             
              </Grid>


        
                 
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                 <Box sx={{ minWidth: 180 }}>
                      <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Denomination</InputLabel>
                          <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={denomination}
                              label="Denomination"
                              onChange={handleChangeDenomination}
                          >
                              <MenuItem value={10}>Naira</MenuItem>
                              <MenuItem value={20}>Pounds</MenuItem>
                              <MenuItem value={30}>Dollars</MenuItem>
                              <MenuItem value={30}>Kobo</MenuItem>
                        
                          </Select>
                      </FormControl>
                  </Box>

                </Stack>
             
              </Grid>




              
           <Stack style={{flexDirection:'row', justifyContent:'center', margin:'0px auto', gap:5}}>

          
                  <Box sx={{ minWidth: 180 }}>
                      <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Worship Style</InputLabel>
                          <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={style}
                              label="Worship Style"
                              onChange={handleChangeStyle}
                          >
                              <MenuItem value={10}>option1</MenuItem>
                              <MenuItem value={20}>option2</MenuItem>
                              <MenuItem value={30}>option3</MenuItem>
                              <MenuItem value={30}>option4</MenuItem>
                              <MenuItem value={30}>option5</MenuItem>
                          </Select>
                      </FormControl>
                  </Box>




                   <Box sx={{ minWidth: 180 }}>
                      <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Language</InputLabel>
                          <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={language}
                              label="Language"
                              onChange={handleChangeLanguage}
                          >
                              <MenuItem value={10}>Yoruba</MenuItem>
                              <MenuItem value={20}>Igbo</MenuItem>
                              <MenuItem value={30}>Hausa</MenuItem>
                              <MenuItem value={30}>English</MenuItem>
                              <MenuItem value={30}>Spanish</MenuItem>
                          </Select>
                      </FormControl>
                  </Box>

     </Stack>



             


   
             <Stack style={{flexDirection:'row', margin:'0px auto', gap:20, marginTop:40}}>


                 <Grid size={12}>
                <AnimateButton>
                  <Button  size="large" variant="contained"  style={{backgroundColor:'#E5E5FF', color:'#2B04DB', whiteSpace:'nowrap', width:150, fontSize:10, borderRadius:'30px'}}>
                    Save and Resume Later
                  </Button>
                </AnimateButton>
              </Grid>


                <Grid size={12}>
                <AnimateButton>
                  <Button  size="large" variant="contained"  style={{backgroundColor:'#2B04DB', fontSize:10, width:150, borderRadius:'30px'}} onClick={Go}>
                    Next
                  </Button>
                </AnimateButton>
              </Grid>

             </Stack>
           
             



             









            </Grid>
          </form>
   
    </>
  );
}
