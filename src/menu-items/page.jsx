// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: '',
  type: 'group',
  children: [

    
    
    {
      id: 'Team-Streams',
      title: 'All Streams',
      type: 'item',
      url: '/login',
      icon: icons.LoginOutlined,
      target: true
    },
    {
      id: 'Events',
      title: 'Events',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true
    },


     {
      id: 'Donations',
      title: 'Donations',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true
    },



      {
      id: 'Bible Study',
      title: 'Bible Study',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true
    },



        {
      id: 'Community',
      title: 'Community',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true
    },



        {
      id: 'Requests',
      title: 'Requests',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true
    },












    // {
    //   id: 'login1',
    //   title: 'Login',
    //   type: 'item',
    //   url: '/login',
    //   icon: icons.LoginOutlined,
    //   target: true
    // },
    // {
    //   id: 'register1',
    //   title: 'Register',
    //   type: 'item',
    //   url: '/register',
    //   icon: icons.ProfileOutlined,
    //   target: true
    // }
  ]
};

export default pages;
