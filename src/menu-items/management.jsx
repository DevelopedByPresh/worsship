// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};



const Managemnt = {
  id: 'Managemnt',
  title: 'Managemnt',
  type: 'group',
  children: [
    {
      id: 'Team-Members',
      title: 'Team Members',
      type: 'item',
      url: 'dashboard/TeamMember',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'Church-Settings',
      title: 'Church Settings',
      type: 'item',
      url: 'dashboard/ChurchSettings',
      icon: icons.BgColorsOutlined
    },
    {
      id: 'Verification',
      title: 'Verification',
      type: 'item',
      url: 'dashboard/Verification',
      icon: icons.BarcodeOutlined
     },

       {
      id: 'Setting',
      title: 'Setting',
      type: 'item',
      url: 'dashboard/Settings',
      icon: icons.BgColorsOutlined
    },
  ]
};

export default Managemnt;
