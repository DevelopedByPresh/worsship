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

export default function AuthStep2() {
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
 navigate('/Authentication/Personalization/step3');
  }

















    return (
        <>

            <form >
                <Grid container spacing={2}>


                    <Grid size={12} sx={{ mt: 1 }}>
                        <Stack sx={{ gap: 1 }}>
                            <InputLabel htmlFor="company-signup" style={{ fontSize: 10 }}>Lead Pastor/Admin Full Name</InputLabel>
                            <OutlinedInput
                                id="company-signup"
                                name="company"
                                placeholder="Enter your Lead Pastor’s Full Name"
                            />
                        </Stack>

                    </Grid>







                    <Grid size={12}>
                        <Stack sx={{ gap: 1 }}>
                            <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}>Email Address</InputLabel>
                            <OutlinedInput
                                fullWidth
                                id="email-login"
                                type="email"
                                name="email"
                                placeholder="Enter your lead pastor’s email address"
                            />
                        </Stack>

                    </Grid>




                    <Grid size={12}>
                        <Stack sx={{ gap: 1 }}>
                            <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}>Phone Number</InputLabel>
                            <OutlinedInput
                                fullWidth
                                id="email-login"
                                type="text"
                                name="email"
                                placeholder="Enter your Lead Pastor’s phone number"
                            />
                        </Stack>

                    </Grid>





                    <Grid size={12}>
                        <Stack sx={{ gap: 1 }}>
                            <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}>Church Official  Website</InputLabel>
                            <OutlinedInput
                                fullWidth
                                id="email-login"
                                type="text"
                                name="email"
                                placeholder="Add your Website Link"
                            />
                        </Stack>

                    </Grid>




                    <Grid size={12}>
                        <Stack sx={{ gap: 1 }}>
                            <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}>Church Official Social Media </InputLabel>
                            <OutlinedInput
                                fullWidth
                                id="email-login"
                                type="text"
                                name="email"
                                placeholder="Add your Social Media Link"
                            />
                        </Stack>

                    </Grid>















                    <Stack style={{ flexDirection: 'row', margin: '0px auto', gap: 20, marginTop: 40 }}>


                        <Grid size={12}>
                            <AnimateButton>
                                <Button size="large" variant="contained" style={{ backgroundColor: '#E5E5FF', color: '#2B04DB', whiteSpace: 'nowrap', width: 150, fontSize: 10, borderRadius: '30px' }} onClick={Go}>
                                    Save and Resume Later
                                </Button>
                            </AnimateButton>
                        </Grid>


                        <Grid size={12}>
                            <AnimateButton>
                                <Button size="large" variant="contained" style={{ backgroundColor: '#2B04DB', fontSize: 10, width: 150, borderRadius: '30px' }} onClick={Go}>
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
