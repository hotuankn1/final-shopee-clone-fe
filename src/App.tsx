import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme, themeVar } from './themes/Theme';
import Header from './components/header';
import Footer from './components/footer';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Home from './pages/home';
import AppleWatch from './pages/apple-watch';
import Cart from './pages/cart';
import OrderHistory from './pages/order-history';



function App() {
  return (
    <CssVarsProvider theme={themeVar}>
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/apple-watch" element={<AppleWatch />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/order/" >
            </Route>
            <Route path='/history' element={<OrderHistory />} />
          </Routes>
        </Router>
        <Footer></Footer>
      </ThemeProvider>
    </CssVarsProvider>
  );
}

export default App;
