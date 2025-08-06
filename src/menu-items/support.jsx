// assets

// // icons
// const icons = {
//   ChromeOutlined,
//   QuestionOutlined
// };


import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  ChromeOutlined,
  QuestionOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
    ChromeOutlined,
  QuestionOutlined
};



const support = {
  id: '',
  title: '',
  type: 'group',
  children: [

      
    
    {
      id: 'Team-Streams',
      title: 'All Streams',
      type: 'item',
      url: 'dashboard/AllStreams',
      icon: icons.FontSizeOutlined,
     // target: true
    },
    {
      id: 'Events',
      title: 'Events',
      type: 'item',
      url: 'dashboard/Events',
      icon: icons.FontSizeOutlined,
    //  target: true
    },


     {
      id: 'Donations',
      title: 'Donations',
      type: 'item',
      url: 'dashboard/Donations',
      icon: icons.FontSizeOutlined,
    //  target: true
    },



      {
      id: 'Bible Study',
      title: 'Bible Study',
      type: 'item',
      url: 'dashboard/BibleStudy',
      icon: icons.FontSizeOutlined,
     // target: true
    },



        {
      id: 'Community',
      title: 'Community',
      type: 'item',
      url: 'dashboard/Community',
      icon: icons.FontSizeOutlined,
    //  target: true
    },



        {
      id: 'Requests',
      title: 'Requests',
      type: 'item',
      url: 'dashboard/Requests',
      icon: icons.FontSizeOutlined,
     // target: true
    },

       
    
   
  ]
};

export default support;
