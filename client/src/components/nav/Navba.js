import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Outlet,Link } from 'react-router-dom';
 function Navba () {
return(
<>
<div>

<Grid container sx={{display:"flex", flexDirection:"column",height:"10vh",border:"solid 3px black",justifyContent:"center",alignItems:"center"}}>
    <Grid item > <Link to="/" ><Typography>Fresh</Typography></Link></Grid>
    <Grid item  ><Link to="/shop"><Typography>Shop</Typography></Link></Grid>
    <Grid item  ><Link to="/bodycare"><Typography>bodycare</Typography></Link></Grid>
    <Grid item  ><Link to="/login"><Typography>Login</Typography></Link></Grid>
    <Grid item  ><Link to="/reg"><Typography>Register</Typography></Link></Grid>
</Grid>
<Outlet />
</div> 

</>
);
};

export default Navba;