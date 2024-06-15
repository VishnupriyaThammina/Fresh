import React from 'react';
import { Typography,Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const Cart = () => {
  // Sample cart data
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 15 },
  ];

  // Calculate the total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom style={{padding:"2vh"}}>
        Shopping Cart
      </Typography>
<Grid container item display="flex" style={{width:"100%",justifyContent:"center",alignItems:"center"}} >
<Grid item style={{width:"90%"}}>

      <TableContainer  component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell align="right">${item.price}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell className="total" colSpan={2} align="right">
                Total: ${getTotalPrice()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
</Grid>  
</Grid>
<Grid display="flex" style={{width:"95%",justifyContent:"right",padding:"2vh",alignItems:"center"}}>
<Button variant="contained" style={{backgroundColor:"black",color:"white"}}className="checkout-btn">
        Checkout
      </Button>
</Grid>
      
    </div>
  );
};

export default Cart;
