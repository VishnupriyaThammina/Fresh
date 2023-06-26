import React, { useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate} from 'react-router-dom';
import { Grid, TextField, Button } from '@mui/material';
import login from "../images/login.jpg"
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import loginValidate from './loginValidate'; // Update the import path


const MobileLogin = () =>{
    const [formData, setFormData] = useState({
       
     
        email: '',
        password: '',
      });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
     
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = loginValidate(formData);
    
        if (Object.keys(formErrors).length > 0) {
          setErrors(formErrors);
        } else {
          try {
            const response = await axios.post('http://localhost:5000/register', formData);
            console.log(response);
            if (response.status === 201) {
              navigate('/');
            }
          } catch (error) {
            console.log(error);
          }
        }
      };

   
return(
    <>

<div>
  <Grid container direction="column">
<Grid item container sx={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#cedbd0",padding:"20px"}}>
<Grid item sx={{}}  >
  <form onSubmit={handleSubmit}  >
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
                        error={!!errors.email}
                        helperText={errors.email}
                        onChange={handleChange}
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
                        error={!!errors.password}
  helperText={errors.password}
                        onChange={handleChange}
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