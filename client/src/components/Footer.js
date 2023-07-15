import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FEFBF6",
    color: theme.palette.common.black,
    padding: theme.spacing(4),
  },
  container: {
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
 

  copyRight: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container className={classes.container}>
       
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body2" className={classes.copyRight}>
            © {new Date().getFullYear()} Frontendshape. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
