import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  
  wraper:{
height:"60vh",
width:"100vh"
  }
  ,root: {
    position: 'center',
    marginBottom: theme.spacing(2),
    width: '90%', // Set the width to 100% of the viewport width
    backgroundSize: '100% auto', // Adjust the background size
    height:"90vh"
  },
  image: {
    width: '100%',
    height: 500,
    borderRadius: "1.5vh",
    objectFit: 'cover',
filter: 'brightness(80%) contrast(100%) grayscale(40%)',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      objectPosition: 'center', // Center the image vertically
    },
  },
  textContainer: {

   
      position: 'absolute',
 
      transform: 'none',
      textAlign: 'left',
      
      backgroundColor: 'transparent',
      color: theme.palette.common.black,
      [theme.breakpoints.up('sm')]: {
        padding:"30px",
      }
      

  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: 'white',
  },
  description: {
    marginBottom: theme.spacing(2),
    color: 'white',
  },
  button: {
    color: theme.palette.common.black,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'black',
      color: theme.palette.common.white,
    },
    marginBottom: theme.spacing(2),
    fontSize: '14px',
   
  },
}));

const Aban = ({ url,title,description }) => {
  const classes = useStyles();

  return (
    <Grid container display="flex" style={{ alignItems:'center', justifyContent:'center'}}  className='wraper' >
    <Grid item container className={classes.root}  display="flex" alignItems='center' justifyContent='center' >
      <Grid item xs={12} sm={12}>
        <img src={url} alt="Background" className={classes.image} />
      </Grid>
      <Grid item container display="flex" alignItems='left' justifyContent="center " direction="column" xs={12} sm={6} className={classes.textContainer}>
      <Grid item>
      <Typography variant="h5" className={classes.title}>
      {title}
        </Typography>
      </Grid>
      <Grid item >
        <Typography variant="body1" className={classes.description}>
        {description}   </Typography>
       </Grid>
       <Grid item>
       <Link to="/shop" >    <Button variant="contained" className={classes.button} >
          SHOP ALL
        </Button> </Link> 
        </Grid>
      
      </Grid>
    </Grid>
    </Grid>
  );
};

export default Aban;
