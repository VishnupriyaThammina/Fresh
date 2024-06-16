import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/scss/main.scss'
import Nav from './components/Nav';
import HomePage from './pages/Homepage';
import Products from './pages/Products';
import CartPage from './pages/Cart';
// import Navbar from './components/Navbar';
import Register from "./pages/Register"
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';

import Shop from './pages/Shop';
import Footer from './components/Footer';
// import NotFoundPage from './components/NotFoundPage';
import { makeStyles } from '@mui/styles';
import Bodypage from './pages/Bodypage';
import AdminOrderList from './pages/AdminOrdersList';
import AdminUsersList from './pages/AdminUsersList';
import AdminProductsList from './pages/AdminProductsList';
import CreateProducts from './pages/CreateProducts';
const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '6px',
    },
    '*::-webkit-scrollbar-track': {
      backgroundColor: 'white',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'black',
      borderRadius: '4px',
    },
    '*::-webkit-scrollbar-thumb:hover': {
      backgroundColor: "black",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}> 
    <Router>
    <Routes>

      
    </Routes>
      {/* <Navbar /> */}
      <Nav />

      <Routes>
      

        <Route path="/" element={<HomePage />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/prod' element={<Products />} />
        <Route path='/bodycare' element={<Bodypage/>} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path='/orderlist' element={<AdminOrderList/>}/>
        <Route path='/userslist' element={<AdminUsersList/>}/>
        <Route path='/productslist' element={<AdminProductsList/>}/>
        <Route path='/createprod' element={<CreateProducts/>}/>



        {/* <Route path="/Products" element={<ProductPage />} />
        <Route path="/Cart" element={<CartPage />} />
        Add more routes here */}
      </Routes>
      <br />
      <Footer />
    </Router>
    </div>
  );
};

export default App;
