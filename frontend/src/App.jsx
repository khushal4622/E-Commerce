import React from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import Product from './Pages/Product'
import Testimonials from './Pages/Testimonials'
import Cart from './Pages/Cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlaceOrder from './Pages/PlaceOrder'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import Verify from './Pages/Verify'

const App = () => {
  return (
    <main className='overflow-hidden text-[#404040]'>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>
    </main>
  )
}

export default App