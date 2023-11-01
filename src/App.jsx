import React from 'react'
import Products from './component/products/Products.jsx';
import Navbar from './component/navbar/Navbar.jsx';
import { Routes,Route } from 'react-router-dom';
import Resturant from './component/resturant/Resturant.jsx';
import Pizza from './component/resturant/Pizza.jsx';
import Salad from './component/resturant/Salad.jsx';
import Onion from './component/resturant/Onion.jsx';
export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='product' element={<Products/>}/>
      <Route path='res' element={<Resturant/>}/>
      <Route path='Pizza' element={<Pizza/>}/>
      <Route path='Salad' element={<Salad/>}/>
      <Route path='Onion' element={<Onion/>}/>
    </Routes>
    
    </>
  )
}
