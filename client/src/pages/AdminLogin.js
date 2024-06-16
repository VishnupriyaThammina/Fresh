import React, { useState } from 'react';
import axios from 'axios';
import DesktopAdminLogin from '../components/DesktopAdminLogin';
import MobileAdminLogin from '../components/MobileAdminLogin';


import { useMediaQuery } from '@mui/material';
const AdminLogin = () =>{
 
        const isSmallScreen = useMediaQuery('(max-width: 750px)');
return(
        <div>
            
      {isSmallScreen ? (
        /* Render content for small screens */
        <MobileAdminLogin />
      ) : (
        /* Render content for larger screens */
        <DesktopAdminLogin />
      )}
    </div>

);
}
export default AdminLogin;