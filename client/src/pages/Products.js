// MyComponent.js
import React from 'react';
import styles from '../styles/Homepage.module.css';
import ProductCard from '../components/ProductCard';
import facewashImage from '../images/lip gloss.png'; // Update the path to your image file
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  prod:{},
});
const Products = () => {
  const classes = useStyles();
  
    return (
        <div className={styles.homepage}>
<Grid container>
  <Grid item className={classes.prod} >
  <ProductCard name="Face Wash" image={facewashImage} price="Rs. 80" />
  </Grid>
  <Grid item className={classes.prod} >
  <ProductCard name="Face Wash" image={facewashImage} price="Rs. 80" />
  </Grid>
  <Grid item className={classes.prod} >
  <ProductCard name="Face Wash" image={facewashImage} price="Rs. 80" />
  </Grid>
  <Grid item className={classes.prod} >
  <ProductCard name="Face Wash" image={facewashImage} price="Rs. 80" />
  </Grid>
  <Grid item className={classes.prod} >
  <ProductCard name="Face Wash" image={facewashImage} price="Rs. 80" />
  </Grid>
  <Grid item className={classes.prod} >
  <ProductCard name="Face Wash" image={facewashImage} price="Rs. 80" />
  </Grid>
  <Grid item className={classes.prod} >
  <ProductCard name="Face Wash" image={facewashImage} price="Rs. 80" />
  </Grid>
  <Grid item className={classes.prod} >
  <ProductCard name="Face Wash" image={facewashImage} price="Rs. 80" />
  </Grid>
  <Grid item className={classes.prod} >
  <ProductCard name="Face Wash" image={facewashImage} price="Rs. 80" />
  </Grid>
  <Grid item className={classes.prod} >
  <ProductCard name="Face Wash" image={facewashImage} price="Rs. 80" />
  </Grid>
</Grid>
              


        </div>
      );
    };

export default Products;
