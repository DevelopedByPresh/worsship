import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

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

import CheckIcon from '@mui/icons-material/Check';


export default function AuthCreatePassword({ isDemo = false }) {

  const navigate = useNavigate()
  const [checked, setChecked] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const Go = () => {
    navigate('/Authentication/VerifyAccount')
  }










  return (
    <>
      <Formik>

        <form >
          <Grid container spacing={3}>




            <Grid size={12}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="password-login" style={{ fontSize: 10 }}>Password</InputLabel>
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




            <Grid size={12}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel htmlFor="password-login" style={{ fontSize: 10 }}>Confirm Password</InputLabel>
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
                  placeholder="Confirm your Password"
                />
              </Stack>

            </Grid>







            <Grid sx={{ mt: -1 }} size={12}>




              <Grid size={12}>
                <AnimateButton>
                  <Button fullWidth size="large" variant="contained" style={{ backgroundColor: '#F1F2FF', color: '#5E5F6B', fontSize: 11, borderRadius: '10px', marginTop: 5 }}>
                    <CheckIcon style={{ width: 15, height: 15, marginRight: 10 }} /> Log into your account anytime with this password
                  </Button>
                </AnimateButton>
              </Grid>



            </Grid>






            <Grid size={12}>
              <AnimateButton>
                <Button fullWidth size="large" variant="contained" style={{ backgroundColor: '#2B04DB', borderRadius: '30px' }} onClick={Go}>
                  Create Password
                </Button>
              </AnimateButton>

            </Grid>

          </Grid>
        </form>

      </Formik>
    </>
  );
}

AuthCreatePassword.propTypes = { isDemo: PropTypes.bool };
