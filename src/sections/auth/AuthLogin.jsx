import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import vector from "./Vector.png"

import AppleIcon from '@mui/icons-material/Apple';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';


export default function AuthLogin({ isDemo = false }) {
  const [checked, setChecked] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Formik>
      
          <form >
            <Grid container spacing={3}>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="email-login" style={{fontSize:10}}>Email Address</InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="email"
                    name="email"
                  
                    placeholder="Enter your Email Address"
                    fullWidth
                  />
                </Stack>
              
              </Grid>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="password-login" style={{fontSize:10}}>Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="-password-login"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          color="secondary"
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="Enter your Password"
                  />
                </Stack>
               
              </Grid>
              <Grid sx={{ mt: -1 }} size={12}>

                <Stack direction="row" sx={{ gap: 2, alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                        size="small"
                      />
                    }
                    label={<Typography variant="h6">Remember me </Typography>}
                  />
                  <Link variant="h6" style={{cursor:'pointer'}} color="#2B04DB">
                    Forgot Password?
                  </Link>
                </Stack>

              </Grid>






                <Grid size={12}>
                              <AnimateButton>
                                <Button fullWidth size="large" variant="contained"  style={{backgroundColor:'#2B04DB', borderRadius:'30px'}}>
                                  Log in
                                </Button>
                              </AnimateButton>
                                  <Stack sx={{ mt:2,alignItems: 'baseline', alignItems:'center', justifyContent: 'center', mb: { xs: -0.5, sm: 0.5 } }}>
              
                                <Typography variant='h6' color='#7D7F81' >or</Typography>
                                </Stack>  
              
                                  <Stack style={{flexDirection:'row', marginTop:5, justifyContent:'center', alignItems:'center', gap:15}}>
                                  <Button  size="small" variant="outlined"  style={{borderRadius:'30px', gap:10, fontSize:10, borderColor:'gray', color:'gray'}} >
                                <img src={vector} style={{width:15, height:15}} alt="google"/>  Continue with Google
                                </Button>
              
                                      <Button  size="small" variant="outlined"  style={{borderRadius:'30px', gap:10, fontSize:10, borderColor:'gray', color:'gray'}} >
                                        <AppleIcon  style={{width:15, height:15}}/>  Continue with Apple
                                </Button>
              
                                  </Stack>
                              
                            </Grid>
            
            </Grid>
          </form>
       
      </Formik>
    </>
  );
}

AuthLogin.propTypes = { isDemo: PropTypes.bool };
