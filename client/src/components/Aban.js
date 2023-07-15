import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginBottom: theme.spacing(2),
    width: '100%', // Set the width to 100% of the viewport width
    backgroundSize: '100% auto', // Adjust the background size
  
  },
  image: {
    width: '100%',
    height: 500,
    objectFit: 'cover',
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
    <Grid container className={classes.root} alignItems='center'>
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
        <Button variant="contained" className={classes.button} >
          SHOP ALL
        </Button>
        </Grid>
      
      </Grid>
    </Grid>
  );
};

export default Aban;
