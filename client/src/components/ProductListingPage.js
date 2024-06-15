import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';

const useStyles = makeStyles({
  card: {
    maxWidth: 450,
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    height: 600,
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    padding: '1rem',
    height: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  details: {
    display: 'flex',
    alignItems: 'center',
  },
  price: {
    color: '#888',
  },

  wishlistIcon: {
    marginLeft: 'auto',
  },
  button1: {
    "&:hover": {
      color: "black",
    },
  },
});

const ProductListingPage = ({ products }) => {
  const [productList, setProductList] = useState(products);
  const classes = useStyles();

  const handleAddToWishlist = (productId) => {
    const updatedProducts = productList.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          wishlist: !product.wishlist, // Toggle the wishlist property
        };
      }
      return product;
    });

    setProductList(updatedProducts);
  };

  return (
    <Grid container spacing={2}>
      {productList.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={product.id} >
          <Card className={classes.card}  style={{backgroundColor:"#fffff"}} elevation={3} >
            <div className={classes.imageContainer}>
              <img src={product.image} alt={product.name} className={classes.image} />
            </div>
            <CardContent className={classes.content}>
              <div className={classes.detailsContainer}>
                <div className={classes.details}>
                  <Rating
                    style={{ color: "black" }}
                    name={`rating-${product.id}`}
                    value={product.rating}
                    precision={0.5}
                    readOnly
                  />
                  <Typography variant="body2" color="text.secondary">
                    ({product.ratedby})
                  </Typography>
                </div>
                <IconButton
                  className={classes.wishlistIcon}
                  onClick={() => handleAddToWishlist(product.id)}
                >
                  {product.wishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </div>
              <Typography variant="h6" fontWeight="bold"  >
                {product.name}
              </Typography>
              <Typography variant="body1" color="red" fontWeight="bold" className={classes.price}>
                ${product.price}
              </Typography>
              <Button
              elevation={0}
                variant="contained"
                style={{ backgroundColor: "black",boxShadow:"none" }}
                className={classes.button1}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "white";
                  e.target.style.color = "black";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "black";
                  e.target.style.color = "white";
                  e.target.style.border="2px solid black";
                }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductListingPage;
