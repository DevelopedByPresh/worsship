import { RouterProvider } from 'react-router-dom';

// project imports
import router from 'routes';
import ThemeCustomization from 'themes';

import ScrollTop from 'components/ScrollTop';

import { useEffect } from 'react';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {


  

      //   useEffect(() => {
      
      //   document.body.style.zoom = '67%'; 

      // }, [])









  return (
    <ThemeCustomization>
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
    </ThemeCustomization>
  );
}
