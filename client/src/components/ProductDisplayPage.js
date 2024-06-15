import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  // ... your existing styles ...                       

  // Additional styles for responsiveness
  responsiveContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  responsiveImageList: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  responsiveThumbnail: {
    [theme.breakpoints.down('sm')]: {
      width: '20%',
      height: 'auto',
    },
  },
}));

const ProductDisplayPage = ({ product }) => {
  const classes = useStyles();

  const { name, description, price, images } = product;
  const [mainImage, setMainImage] = useState(images[0]);

  const handleOnClick = (e) => {
    setMainImage(e.target.src);
  };

  return (
    <>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        className={classes.responsiveContainer}
        style={{ height: '650px' }}
      >
        <Grid
          container
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          style={{
            borderRadius: '25px',
            backgroundColor: '#F7ECDE',
            height: '600px',
            width: '93%',
          }}
        >
          <Grid
            item
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            style={{ height: '85%', width: '45%' }}
          >
            <Grid
              item
              container
              display="flex"
              flexDirection="column"
              style={{ height: '95%', width: '30%' }}
              className={classes.responsiveImageList}
            >
              {images.map((image, index) => (
                <img
                  onClick={handleOnClick}
                  className={classes.responsiveThumbnail}
                  key={index}
                  src={image}
                  alt='blah'
                />
              ))}
            </Grid>
            <Grid
              item
              container
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              style={{ height: '95%', width: '70%' }}
            >
              <img src={mainImage} style={{ width: '100%', height: 'auto', maxWidth: '400px' }} />
            </Grid>
          </Grid>
          <Grid item container style={{ height: '85%', width: '45%' }}>
            <Grid
              item
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              style={{ overflow: 'auto', scrollbarWidth: '0px', width: '100%', height: '100%' }}
            >
              {/* Your content goes here */}
              {/* The content will be vertically scrollable on small screens */}
              <Typography>
                How it works The grid system is implemented with the Grid component: It uses CSS's Flexible Box module
                for high flexibility. There are two types of layout: containers and items. Item widths are set in
                percentages, so they're always fluid and sized relative to their parent element. Items have padding to
                create the spacing between individual items. There are five grid breakpoints: xs, sm, md, lg, and xl.
                Integer values can be given to each breakpoint, indicating how many of the 12 available columns are
                occupied by the component when the viewport width satisfies the breakpoint constraints. If you are new
                to or unfamiliar with flexbox, we encourage you to read this CSS-Tricks flexbox guide. Fluid grids Fluid
                grids use columns that scale and resize content. A fluid grid's layout can use breakpoints to determine
                if the layout needs to change dramatically.
              </Typography>
              {/* End of content */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <div className={classes.container}>
        <Typography variant="h4" className={classes.productName}>
          {name}
        </Typography>
        <Typography variant="body1" className={classes.productDescription}>
          {description}
        </Typography>
        <Typography variant="h6" className={classes.price}>
          {price}
        </Typography>
        <Button variant="contained" color="primary" className={classes.buyButton}>
          Add to Cart
        </Button>
      </div>
    </>
  );
};

export default ProductDisplayPage;
