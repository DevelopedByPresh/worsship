import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';

// jwt auth
const LoginPage = Loadable(lazy(() => import('pages/auth/Login')));
const RegisterPage = Loadable(lazy(() => import('pages/auth/Register')));
const OnBoarding = Loadable(lazy(() => import('pages/auth/OnBoard')));
const CreatePassword = Loadable(lazy(() => import('pages/auth/CreatePassword')));
const VerifyAccount = Loadable(lazy(() => import('pages/auth/VerifyAccount')));
const OTP = Loadable(lazy(() => import('pages/auth/OTP')));
const Personalization = Loadable(lazy(() => import('pages/auth/Step1')));
const PersonalizationStep2 = Loadable(lazy(() => import('pages/auth/Step2')));
const PersonalizationStep3 = Loadable(lazy(() => import('pages/auth/Step3')));
const PersonalizationStep4 = Loadable(lazy(() => import('pages/auth/Step4')));




// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  children: [
         {
          path: '/',
          element: <OnBoarding />
        },
    {
      path: '/Authentication',
      children: [
        {
          path: '/Authentication',
          element: <RegisterPage />
        },
        {
          path: '/Authentication',
          element: <RegisterPage />
        },

        
     


          {
          path: 'CreatePassword',
          element: <CreatePassword />
        },

             {
          path: 'VerifyAccount',
          element: <VerifyAccount />
        },


              {
          path: 'OTP',
          element: <OTP />
        },


              {
          path: 'Personalization',
          element: <Personalization />
        },


            {
          path: 'Personalization/step2',
          element: <PersonalizationStep2 />
        },

        
            {
          path: 'Personalization/step3',
          element: <PersonalizationStep3 />
        },



          {
          path: 'Personalization/step4',
          element: <PersonalizationStep4 />
        },







        


      ]
    }
  ]
};

export default LoginRoutes;
