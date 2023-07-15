import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    backgroundColor: 'white',
  },
  imageContainer: {
    position: 'relative',
    width: 450,
    height: 450,
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: 200,
      height: 200,
    },
    '&:hover': {
      cursor: 'pointer',
    },
    borderRadius: '20px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    borderRadius: '20px',
  },
  text: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
  },
  button: {
    color: theme.palette.common.black,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'black',
      color: theme.palette.common.white,
    },

    marginBottom: theme.spacing(2),
    fontSize: '12px',
    // padding: theme.spacing(1, 3),
  },
}));

const ThreeImagesStack = ({ images }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image, index) => (
        <div className={classes.imageContainer} key={index}>
          <img src={image.src} alt={image.alt} className={classes.image} />
          <div className={classes.overlay}>
            <Typography variant="h6" className={classes.text}>
              {image.text}
            </Typography>
            <Button
              variant="contained"
              className={classes.button}
              href={image.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {image.buttonText}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeImagesStack;
