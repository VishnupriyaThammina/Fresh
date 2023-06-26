import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Homepage';
// import ProductPage from './pages/Products';
// import CartPage from './pages/Cart';
import Navbar from './components/Navbar';
import Register from "./pages/Register"
import Login from './pages/Login';
// import NotFoundPage from './components/NotFoundPage';



const App = () => {
  
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/login" element={<Login />} />


        {/* <Route path="/Products" element={<ProductPage />} />
        <Route path="/Cart" element={<CartPage />} />
        Add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
