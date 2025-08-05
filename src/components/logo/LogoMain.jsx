// material-ui
import { useTheme } from '@mui/material/styles';
import image from "./avatar.png"
import image2 from "./logos.png"
import Stack from '@mui/material/Stack';

// ==============================|| LOGO SVG ||============================== //

export default function LogoMain() {
  const theme = useTheme();
  return (
    <Stack style={{display:'flex', alignItems:'center', marginTop:15, flexDirection:'row', justifyContent:'space-between', gap:30}}>

 
   <img src={image} alt='image' style={{height:70}} /> 
    <img src={image2} alt='image' style={{width:180, marginTop:20, height:45}}/> 
      </Stack>
  );
}
