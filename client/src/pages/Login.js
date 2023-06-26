import React, { useState } from 'react';
import axios from 'axios';
import DesktopLogin from '../components/DesktopLogin';
import MobileLogin from '../components/MobileLogin';


import { useMediaQuery } from '@mui/material';
const Login = () =>{
 
        const isSmallScreen = useMediaQuery('(max-width: 750px)');
return(
        <div>
      {isSmallScreen ? (
        /* Render content for small screens */
        <MobileLogin />
      ) : (
        /* Render content for larger screens */
        <DesktopLogin />
      )}
    </div>

);
}
export default Login;