import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      height: '50%',
      justifyContent: 'center',
      alignItems:"center",
    },
    overflowY: 'hidden', // Hide vertical scrollbar
    overflowX: 'hidden', // Hide horizontal scrollbar
  },
  image: {
    width: 150,
    height: 150,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto', // Center the image horizontally
    },
  },
  textContainer: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  button1: {
    border: '1px solid black',
    color: theme.palette.common.black,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'black',
      color: theme.palette.common.white,
    },
  },
}));

const StandardImageList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6}>
        <Grid container spacing={1} justify="center">
  {itemData.map((item) => (
    <Grid item xs={5} sm={5} md={5} key={item.img}>
      <div style={{ width: '100%', height: 0, paddingTop: '100%', position: 'relative' }}>
        <img
          src={`${item.img}?w=150&h=150&fit=crop&auto=format`}
          alt={item.title}
          className={classes.image}
          loading="lazy"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>
    </Grid>
  ))}
</Grid>
        </Grid>
        <Grid item container xs={12} sm={12} md={6} className={classes.textContainer}>
          <Grid item>
            <Typography variant="body2">
              Self-care is crucial for holistic well-being, nurturing physical and mental health. Prioritizing self-care empowers individuals to thrive, promoting balance, resilience, and a higher quality of life.
            </Typography>
            <br />
            <Grid item style={{ textAlign: 'center' }}>
              <Button className={classes.button1}>Shop All</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const itemData = [
  {
    img: '/images/badypos.jpg',
    title: 'Breakfast',
  },
  {
    img: '/images/selflove.jpg',
    title: 'Burger',
  },
  {
    img: '/images/selfexplor.jpg',
    title: 'Camera',
  },
  {
    img: '/images/bodypos1.jpg',
    title: 'Coffee',
  },
];

export default StandardImageList;
