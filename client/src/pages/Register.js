import React from 'react';

import 'react-toastify/dist/ReactToastify.css';


import { useMediaQuery } from '@mui/material';
import DesktopRegister from '../components/DesktopRegister';
import MobileRegister from '../components/MobileRegister';
const Register = () => {
  


  const isSmallScreen = useMediaQuery('(max-width: 750px)');


  return (
<>

<div>
      {isSmallScreen ? (
        /* Render content for small screens */
        <MobileRegister />
      ) : (
        /* Render content for larger screens */
        <DesktopRegister />
      )}
    </div>

{/* 
*/}


   </>
  );
};

export default Register;
