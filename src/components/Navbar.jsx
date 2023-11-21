import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartProductContext } from "../context/cartproducts"
import { LookingContext } from '../context/looking'

const Navbar = () => {
  const { cart } = useContext(CartProductContext)
  const [search,setSearch]=useState("")
  const {  setLookingFor } = useContext(LookingContext)
  const handleOnClickLookingFor=()=>{
    setLookingFor(search)
    
  }
  
  return (
    <div className='bg-white w-full h-20 flex items-center justify-between'>
      <Link to={"/Caputeeno/"} className='ml-40 flex-1'>
        <h1 className='font-stencil text-textGrey text-4xl'>capputeeno</h1>
      </Link>
      <div className='flex pl-64 flex-1 items-center'>
        <input placeholder='Procurando algo específico?'
          className=' w-80 h-10 bg-inputGrey rounded-l-md pl-5  cursor-pointer '
          value={search} onChange={(e)=>setSearch(e.target.value)}
          >
          </input>
            <img  className="mr-12 bg-inputGrey p-2 rounded-r-md cursor-pointer" src='search-loupe.svg' onClick={handleOnClickLookingFor} ></img>
        <Link to={"/Caputeeno/cart"} className='relative'>
          <img src='shopping-bag.svg' />
          <div
            className='bg-[#DE3838] rounded-[50%] w-3 h-3 absolute bottom-0 right-0 text-[12px] text-white flex items-center justify-center text-center' >
            {cart.length}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar