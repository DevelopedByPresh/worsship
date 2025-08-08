

import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AttractionsIcon from '@mui/icons-material/Attractions';
import CommentIcon from '@mui/icons-material/Comment';



const support = {
  id: '',
  title: '',
  type: 'group',
  children: [

      
    
    {
      id: 'All-Streams',
      title: 'All Streams',
      type: 'item',
      url: 'AllStreams',
      icon: LocalPharmacyIcon,
    // target: true
    },
    {
      id: 'Events',
      title: 'Events',
      type: 'item',
      url: 'Events',
      icon: CalendarMonthIcon,
    //  target: true
    },


     {
      id: 'Donations',
      title: 'Donations',
      type: 'item',
      url: 'Donations',
      icon: VolunteerActivismIcon
    //  target: true
    },



      {
      id: 'Bible Study',
      title: 'Bible Study',
      type: 'item',
      url: 'BibleStudy',
      icon: MenuBookIcon
     // target: true
    },



        {
      id: 'Community',
      title: 'Community',
      type: 'item',
      url: 'Community',
      icon: AttractionsIcon
    //  target: true
    },



        {
      id: 'Requests',
      title: 'Requests',
      type: 'item',
      url: 'Requests',
      icon: CommentIcon,
     // target: true
    },

       
    
   
  ]
};

export default support;
