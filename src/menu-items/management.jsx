// assets

import Diversity3Icon from '@mui/icons-material/Diversity3';
import ChurchIcon from '@mui/icons-material/Church';

import SettingsIcon from '@mui/icons-material/Settings';





const Managemnt = {
  id: 'Managemnt',
  title: 'Managemnt',
  type: 'group',
  children: [
    {
      id: 'Team-Members',
      title: 'Team Members',
      type: 'item',
      url: 'TeamMember',
      icon: Diversity3Icon
    },
    {
      id: 'Church-Settings',
      title: 'Church Settings',
      type: 'item',
      url: 'ChurchSettings',
      icon: ChurchIcon
    },
    {
      id: 'Verification',
      title: 'Verification',
      type: 'item',
      url: 'Verification',
      icon: ChurchIcon
     },

       {
      id: 'Setting',
      title: 'Setting',
      type: 'item',
      url: 'Settings',
      icon: SettingsIcon
    },
  ]
};

export default Managemnt;
