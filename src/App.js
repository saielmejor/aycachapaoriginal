import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages /Home';
import Gallery from './pages /Gallery';
import Location from './pages /Location';
import Menu from './pages /Menu';
import AboutUs from './pages /AboutUs';

function App() {
  return (
   <> 
   <BrowserRouter> 
   <Navbar/>
   <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/gallery' element={<Gallery/>}></Route>
     <Route path='/locations' element={<Location/>}></Route> 
     <Route path='/menu' element={<Menu/>}> </Route>
     <Route path='/about-us' element={<AboutUs/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
