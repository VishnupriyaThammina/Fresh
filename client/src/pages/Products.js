import React,{useState} from 'react';
// import ProductDisplayPage from '../components/ProductDisplayPage';
// import Nav from "../components/Nav";
import { Button, Grid, Typography,  IconButton, } from '@material-ui/core';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';

const Products = () => {
 
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    // Here, on each click, it toggles the state of isFavorite
  };

  return (
    <div>

<Grid container display="flex" style={{justifyContent:"center",alignItems:"center"}}>
<Grid container style={{width:"80%",padding:"5vh"}}>
  <Grid item style={{width:"55%"}}>
  <img src='/images/brow oil.png' style={{width:"100%",borderRadius:"10px"}} alt = "lip balm"></img>
  </Grid>
  <Grid item container display="flex" style={{width:"45%", padding:"4vh", justifyContent:"center", alignItems:"center"}}>
    <Grid style={{ height:"70%",width:"85%"}}>


  <Grid item xs={12} >
    <Grid item style={{padding:"1vh"}}>
    <Typography variant='h5'>Brow Oils</Typography>

    </Grid>
        <Grid container alignItems='center'  >
          <Rating
            style={{ color: 'black' }}
            name={"rating"}
            value={4}
            precision={0.5}
            readOnly
          />
          <IconButton onClick={handleFavoriteClick}>
            {isFavorite ? (
              <FavoriteIcon color="black" fontSize="large" />
            ) : (
              <FavoriteBorderIcon color="black" fontSize="large" />
            )}
          </IconButton>
        </Grid>
        <Button style={{ backgroundColor: 'black', color: 'white' }}>
          Add To Cart
        </Button>
      </Grid>
      <Grid item xs={12} style={{paddingTop:"3vh"}}>
        <Typography variant="body2">
          My Kybrow kit is my go-to brow routine in a ready-to-go kit. The brow pencil lets you shape, style, and fill in, and the clear brow gel locks in color and sets brow hairs. In multiple shades, this kit is cruelty-free and vegan.
        </Typography>
      </Grid> </Grid>
</Grid>    </Grid>
</Grid>

    </div>
  );
};

export default Products;
