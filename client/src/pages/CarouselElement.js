import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { IconButton, Typography, Button, Grid } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: 500,
    overflow: 'hidden',
  },
  slide: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  shadeOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    position: 'absolute',
    top: '20%',
    width: '100%',
    transform: 'translateY(-50%)',
    textAlign: 'center',
    zIndex: 1,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
  },
  controlButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
  leftButton: {
    left: 10,
  },
  rightButton: {
    right: 10,
  },
  button1:{
    color: theme.palette.common.black,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'black',
      color: theme.palette.common.white,
    },
  },
  // Responsive styles
  '@media (max-width: 600px)': {
    root: {
      height: 300,
    },
    content: {
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },
}));

const CarouselElement = ({ images }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    let nextStep = activeStep + 1;
    if (nextStep === images.length) {
      nextStep = 0;
    }
    setActiveStep(nextStep);
  };

  const handleBack = () => {
    const previousStep = (activeStep + images.length - 1) % images.length;
    setActiveStep(previousStep);
  };

  return (
    <div className={classes.root}>
      <SwipeableViews
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
        resistance
      >
        {images.map((image, index) => (
          <div key={index} className={classes.slide}>
            <img src={image.url} alt={`Carousel ${index}`} className={classes.image} />
            <div className={classes.shadeOverlay} />
            <div className={classes.content}>
              <Grid container spacing={2} direction="column" alignItems="center">
                <Grid item>
                  <Typography variant="h5">{image.title}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">{image.text}</Typography>
                </Grid>
                <Grid item>
                  <Button className={classes.button1} variant="contained" color="primary">
                  shop now
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        ))}
      </SwipeableViews>
      <IconButton
        className={`${classes.controlButton} ${classes.leftButton}`}
        onClick={handleBack}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        className={`${classes.controlButton} ${classes.rightButton}`}
        onClick={handleNext}
      >
        <ChevronRight />
      </IconButton>
    </div>
  );
};

export default CarouselElement;
