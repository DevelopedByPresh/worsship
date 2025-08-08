import { useEffect, useState, useRef } from 'react';
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

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField';

// ============================|| JWT - REGISTER ||============================ //

export default function AuthStep3() {
    const navigate = useNavigate()


    const fileInputRef = useRef(null);
    const fileInputRef2 = useRef(null);
    const [fileName, setFileName] = useState('');
    const [fileName2, setFileName2] = useState('');

      const [country, setCountry] = useState('');
         const [state, setState] = useState('');


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
        // setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('');
    }, []);


    const Go = () => {
        navigate('/Authentication/Personalization/step4');
    }



    
  const handleChangeState = (event) => {
    setState(event.target.value);
  };


  
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };





    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            // You can also handle the file upload logic here
            console.log('Selected file:', file);
        } else {
            setFileName('');
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click(); // Trigger click on hidden file input
    };




    
    const handleFileChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName2(file.name);
            // You can also handle the file upload logic here
            console.log('Selected file:', file);
        } else {
            setFileNam2e('');
        }
    };

    const handleButtonClick2 = () => {
        fileInputRef2.current.click(); // Trigger click on hidden file input
    };













    return (
        <>

            <form >
                <Grid container spacing={2}>

                    <Grid size={12} sx={{ mt: 1 }}>
                           <Stack sx={{ gap: 1 }}>
                            <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}>Organization Registration Certificate</InputLabel>
                         <TextField
                          placeholder='Upload Registration certificate'
                        variant="outlined"
                        fullWidth
                        value={fileName}
                        InputProps={{
                            readOnly: true, 
                            endAdornment: (
                                <>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                    />
                                    <Button
                                      
                                        component="span" 
                                        onClick={handleButtonClick}
                                        style={{color:'#2B04DB', backgroundColor:'#F1F2FF',  position:'absolute', right:0}}
                                    
                                    >
                                       Upload
                                    </Button>
                                </>
                            ),
                        }}
                    />

                    </Stack>

                    </Grid>


                   






                       <Grid size={12} sx={{ mt: 1 }}>
                           <Stack sx={{ gap: 1 }}>
                            <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}>Official Logo</InputLabel>
                         <TextField
                      //  label="Official Logo"
                      placeholder='Upload Logo'

                        variant="outlined"
                        fullWidth
                        value={fileName2}
                        InputProps={{
                            readOnly: true, 
                            endAdornment: (
                                <>
                                    <input
                                        type="file"
                                        ref={fileInputRef2}
                                        onChange={handleFileChange2}
                                        style={{ display: 'none' }}
                                    />
                                    <Button
                                      
                                        component="span" 
                                        onClick={handleButtonClick2}
                                        style={{color:'#2B04DB', backgroundColor:'#F1F2FF',  position:'absolute', right:0}}
                                    
                                    >
                                       Upload
                                    </Button>
                                </>
                            ),
                        }}
                    />

                    </Stack>

                    </Grid>


                  <Grid size={12} >
                      <Stack sx={{ gap: 1 }}>
                            <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}>Primary Contact Identification type</InputLabel>
                  <Box sx={{ minWidth: 180 }}>
                      <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Primary Contact Identification type</InputLabel>
                          <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={country}
                            //  label="Select Identity type"
                              placeholder="Select Identity type"
                              onChange={handleChangeCountry}
                          >
                              <MenuItem value={10}>NIN</MenuItem>
                              <MenuItem value={20}>Voter's card</MenuItem>
                              <MenuItem value={30}>Diver's ID card</MenuItem>
                              <MenuItem value={30}>ID Card</MenuItem>
                              <MenuItem value={30}>Utility Bill</MenuItem>
                          </Select>
                      </FormControl>
                  </Box>
                  </Stack>

                     </Grid>



                      <Grid size={12} >
                         <Stack sx={{ gap: 1 }}>
                            <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}> Identification Number</InputLabel>
                          <Box sx={{ minWidth: 180 }}>
                      <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label"> Identification Number</InputLabel>
                          <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={state}
                              label="Enter Identification number"
                              onChange={handleChangeState}
                          >
                              <MenuItem value={10}>option1</MenuItem>
                              <MenuItem value={20}>option2</MenuItem>
                              <MenuItem value={30}>option3</MenuItem>
                              <MenuItem value={30}>option4</MenuItem>
                              <MenuItem value={30}>option5</MenuItem>
                          </Select>
                      </FormControl>
                  </Box>
                  </Stack>

                      </Grid>
                 

    


                          <Grid size={12}>
                           <Stack sx={{ gap: 1 }}>
                            <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}>Primary Contact ID</InputLabel>
                         <TextField
                          placeholder='Upload Identification'
                        variant="outlined"
                        fullWidth
                        value={fileName}
                        InputProps={{
                            readOnly: true, 
                            endAdornment: (
                                <>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                    />
                                    <Button
                                      
                                        component="span" 
                                        onClick={handleButtonClick}
                                        style={{color:'#2B04DB', backgroundColor:'#F1F2FF',  position:'absolute', right:0}}
                                    
                                    >
                                       Upload
                                    </Button>
                                </>
                            ),
                        }}
                    />

                    </Stack>

                    </Grid>





               








                    <Stack style={{ flexDirection: 'row', margin: '0px auto', gap: 20, marginTop: 30 }}>


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
