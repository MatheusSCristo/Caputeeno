import React, { useContext, useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import { Outlet } from 'react-router-dom'
import LookingProvider from './context/looking'
import { CartProductContext } from './context/cartproducts'

const App = () => {
  const { addCacheProduct,cart } = useContext(CartProductContext)
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if(savedCart){
      addCacheProduct(savedCart)}
  }, []); 
  return (
    <LookingProvider>
      <Navbar  />
      <div className='bg-bgGrey min-h-screen font-saira'>
        <Outlet />
      </div>
    </LookingProvider>

  )
}

export default App