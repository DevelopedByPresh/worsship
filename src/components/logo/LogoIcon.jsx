// material-ui
import { useTheme } from '@mui/material/styles';
import image from "./Avatar.png"
import image2 from "./logos.png"
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ==============================|| LOGO ICON SVG ||============================== //

export default function LogoIcon() {
  const theme = useTheme();

  return (
    <Stack>
   <img src={image} alt='image'/> 
      </Stack>
  );
}
