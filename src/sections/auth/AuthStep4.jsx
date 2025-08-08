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
import CheckBoxIcon from '@mui/icons-material/CheckBox';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

// ============================|| JWT - REGISTER ||============================ //

export default function AuthStep4() {
    const [clicked, setClicked] = useState(null);

    const navigate = useNavigate();
         const [state, setState] = useState('')


           
  const handleChangeState = (event) => {
    setState(event.target.value);
  };



    const options = [

        {
            image: Polygon1,
            title: 'Church',
            description: 'I confirm that the information provided is accurate and that I am authorized to represent this church on Worsship.',
            ArrowIcon: ArrowForwardIcon,
            id: 1,
            icon: CheckBoxIcon

        },


        //     {
        //     image:Polygon2,
        //     title:'Christian Podcaster',
        //     description:'For creators sharing faith-based content through podcasts.',
        //     ArrowIcon:ArrowForwardIcon,
        //     id:2,
        //     icon:Person2Icon

        // },



        //     {
        //     image:Polygon2,
        //     title:'Christian Interdemoninational group',
        //     description:'Great for Christian fellowships, ministries, or cross-church initiatives.',
        //     ArrowIcon:ArrowForwardIcon,
        //     id:3,
        //     icon:Groups2Icon

        // },
    ]




    const handleClick = (id) => {
        setClicked(id)

    };


    

    const Go = () => {
        navigate('/dashboard/home');
    }
















    return (
        <>


            <Grid container spacing={2.2} sx={{ mt: 3 }}>

                {options.map((item) => (

                    <Card
                        variant="outlined"
                        onClick={() => handleClick(item.id)}

                        sx={{
                            width: 370,
                            border: '1px solid',
                            borderColor: clicked === item.id ? 'primary.main' : 'grey.300',
                            cursor: 'pointer',
                            transition: 'border-color 0.3s ease',
                            backgroundColor: clicked === item.id ? 'grey.100' : '',

                            boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1)'

                        }}
                    >
                        <CardContent style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>



                            <Stack>
                                <Typography style={{ fontSize: 11, marginTop: 2, width: 200 }}>{item.description}</Typography>

                            </Stack>

                            <Stack>
                                <img src={item.image} style={{ width: 40, height: 40, }} />

                                <Stack style={{ color: '#2B04DB', position: 'absolute', marginLeft: 10, marginTop: 10, justifyContent: 'center', alignItems: 'center', }}>
                                    {<item.icon style={{ width: 20, height: 20, color: item.title === 'Church' ? 'white' : '#2B04DB' }} />}
                                </Stack>

                            </Stack>




                        </CardContent>
                    </Card>

                ))}



                <Grid size={12} >
                    <Stack sx={{ gap: 1 }}>
                        <InputLabel htmlFor="email-signup" style={{ fontSize: 10 }}>What is your role</InputLabel>
                        <Box sx={{ minWidth: 180 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">select role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={state}
                                    label="Enter Identification number"
                                    onChange={handleChangeState}
                                >
                                    <MenuItem value={10}>Lead Pastor</MenuItem>
                                    <MenuItem value={20}>General Pastor</MenuItem>
                                    <MenuItem value={30}>Admin</MenuItem>
                                    <MenuItem value={30}>option4</MenuItem>
                                    <MenuItem value={30}>option5</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Stack>

                </Grid>



                <Grid size={12} sx={{ mt: 5 }}>
                    <AnimateButton>
                        <Button fullWidth size="large" variant="contained" style={{ backgroundColor: '#2B04DB', borderRadius: '30px' }} onClick={Go}>
                            Submit & Finish Setup
                        </Button>
                    </AnimateButton>
                </Grid>




            </Grid>


        </>
    );
}
