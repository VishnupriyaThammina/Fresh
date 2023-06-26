import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import productImage from '../images/facewash.png'; // Replace '../path/to/your/image.jpg' with the actual path to your image

const useStyles = makeStyles({
  card: {
    width: 300, // Set the desired width for the card
    margin:"2vh",
  },
  cardMedia: {
    height: 350, // Set the desired height for the image
    objectFit: 'cover', // Ensure the entire image is visible
  },
  cardContent: {
    textAlign: 'center', // Center the content
  },
  button: {
    marginTop: '1rem', // Add some spacing between the text and the button
  },
});

const ProductCard = ({ name, price, ratings, onAddToCart }) => {
  const classes = useStyles();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({ name, price });
    setIsAddedToCart(true);
  };

  return (
    <Card className={classes.card}>
      <CardMedia component="img" className={classes.cardMedia} image={productImage} alt={name} />
      <CardContent className={classes.cardContent}>
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <Grid item style={{}}>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" style={{ backgroundColor: 'transparent', boxShadow: 'none', color: 'black' }} className={classes.button}>
              <FavoriteBorderOutlinedIcon />
            </Button>
          </Grid>
        </Grid>
        <Typography variant="body1" color="text.secondary">
          Price: {price}
        </Typography>
        <Grid container direction="column" alignItems="center" justifyContent="center">
          <Grid item container alignItems="center" justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                style={{ boxShadow: 'none' }}
                className={classes.button}
                disabled={isAddedToCart}
                onClick={handleAddToCart}
              >
                {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
              </Button>
            </Grid>
          </Grid>   
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
