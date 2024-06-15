import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Grid, TextField, Button } from '@mui/material';
import login from "../images/login.jpg"
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


const MobileLogin = () =>{
  
   
return(
    <>

<div>
  <Grid container direction="column">
<Grid item container sx={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#cedbd0",padding:"20px"}}>
<Grid item sx={{}}  >
  <form onSubmit={(e)=>{e.preventDefault()}}  >
  <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
                  <Grid item textAlign="center" >
                      <h1 sx={{color: "#434d43"}} >Login</h1>
                    </Grid>
    
              <Grid item>
              <TextField
                        label="email"
                        variant="filled"
                        id="email"
                        type="email"
                        name="email"
                       
                        
                        style={{ marginTop: 11 }}
                        InputProps={{ disableUnderline: true }}
                      />
                      </Grid>
              <Grid item>
              <TextField
                        label="password"
                        variant="filled"
                        id="password"
                        type="password"
                        name="password"
                        
                       
                        style={{ marginTop: 11 }}
                        InputProps={{ disableUnderline: true }}
                      />
              </Grid>
           
              <Grid item>
              <Button
  type="submit"
  variant="contained"
  elevation={0}
  sx={{
    backgroundColor: 'black',
    color: 'white',
    width:"100%",
    borderRadius:"10", 
    '&:hover': {
      backgroundColor: '#E0E3E7',
      color: 'black',
      /* Add any other styles for the hover effect if needed */
    },
  }}
>
 Sign in
</Button>
   </Grid>
                    <Grid item textAlign="center" >
                    <Link
  component="button"
  variant="body2"
  underline="hover"
  onClick={() => {
    console.info("I'm a button.");
  }}
  sx={{color: "#434d43"}} 
>
  Forgot your password?
</Link>
                    </Grid>
                    <Grid item container>
<Typography variant = "body1">Don't have an account?
</Typography><Link  component="button"
  variant="body1"
  underline="always"
  onClick={() => {
    console.info("I'm a button.");
  }}
  sx={{color: "#434d43", textDecorationColor:"#434d43"}}  style={{paddingLeft:"5px"}} > Sign up!</Link>
                    </Grid>

              </Grid>
            
         
          </form>
  </Grid>
</Grid>
<Grid item container sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<Grid item>
    <div style={{ position: "relative" }}>
      <img src={`${login}`} style={{ width: "100vw", height: "50vh"}} alt="Login" />
      <div style={{ width:"100%" ,textAlign:"center",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <h3 style={{ width: "100%",color:"#434d43" }}>It's Time to Get Real, FRESH</h3>
      </div>
    </div>
  </Grid>
</Grid>

  </Grid>
</div>
    </>
);

};

export default MobileLogin;