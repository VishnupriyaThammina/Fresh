import React from 'react';
import ProductListingPage from '../components/ProductListingPage';
import { Rating } from '@mui/material/Rating';
const products = [
  {
    id: 1,
    name: 'lip gloss',
    price: 9.99,
    image: '/images/lip gloss.png',
    wishlist: false,
    rating:5,
    ratedby:20,
  },
  {
    id: 2,
    name: 'lip stick',
    price: 14.99,
    image: '/images/lip sticks.png',
    wishlist: false,
    rating:3.5,
    ratedby:10,


  },
  {
    id: 3,
    name: 'lip tint',
    price: 19.99,
    image: '/images/lip tint.png',
    wishlist: false,
    rating:5,
    ratedby:25,


  },
  {
      id: 4,
      name: 'brow oil ',
      price: 19.99,
      image: '/images/brow oil.png',
      wishlist: false,
      rating:4.5,
      ratedby:500,

    },
    {
      id: 5,
      name: 'Product 1',
      price: 9.99,
      image: '/images/moisturizer.png',
      wishlist: false,
      rating:5,
      ratedby:20,
    },
    {
      id: 6,
      name: 'Product 2',
      price: 14.99,
      image: '/images/lip balm.png',
      wishlist: false,
      rating:3.5,
      ratedby:10,


    },
    {
      id: 7,
      name: 'Product 3',
      price: 19.99,
      image: '/images/facewash.png',
      wishlist: false,
      rating:5,
      ratedby:25,


    },
    {
        id: 8,
        name: 'Product 4',
        price: 19.99,
        image: '/images/body wash.png',
        wishlist: false,
        rating:4.5,
        ratedby:500,
  
    },
    {
      id: 1,
      name: 'lip gloss',
      price: 9.99,
      image: '/images/lip gloss.png',
      wishlist: false,
      rating:5,
      ratedby:20,
    },
    {
      id: 2,
      name: 'lip stick',
      price: 14.99,
      image: '/images/lip sticks.png',
      wishlist: false,
      rating:3.5,
      ratedby:10,


    },
    {
      id: 3,
      name: 'lip tint',
      price: 19.99,
      image: '/images/lip tint.png',
      wishlist: false,
      rating:5,
      ratedby:25,


    },
    {
        id: 4,
        name: 'brow oil ',
        price: 19.99,
        image: '/images/brow oil.png',
        wishlist: false,
        rating:4.5,
        ratedby:500,
  
      },
      {
        id: 5,
        name: 'Product 1',
        price: 9.99,
        image: '/images/moisturizer.png',
        wishlist: false,
        rating:5,
        ratedby:20,
      },
      {
        id: 6,
        name: 'Product 2',
        price: 14.99,
        image: '/images/lip balm.png',
        wishlist: false,
        rating:3.5,
        ratedby:10,
  
  
      },
      {
        id: 7,
        name: 'Product 3',
        price: 19.99,
        image: '/images/facewash.png',
        wishlist: false,
        rating:5,
        ratedby:25,
  
  
      },
      {
          id: 8,
          name: 'Product 4',
          price: 19.99,
          image: '/images/body wash.png',
          wishlist: false,
          rating:4.5,
          ratedby:500,
    
      },
    // Add more products as needed
  ];
  
const Shop = () =>{
    return(<>
<ProductListingPage products={products} />
    </>);
}
export default Shop;