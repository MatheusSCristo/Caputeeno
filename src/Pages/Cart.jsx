import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartProductContext } from '../context/cartproducts'

const Cart = () => {
  const { cart, removeProduct } = useContext(CartProductContext)
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState([])
  const handleonClickRemoveProduct = (product, index) => {
    removeProduct(product)
    const newQuantity = [...quantity];   
      for (let i = index; i < newQuantity.length; i++) {
        newQuantity[i] = newQuantity[i + 1]
      }
      setQuantity(newQuantity.slice(0, newQuantity.length )) 
      if(cart.length===0)
      {setQuantity([])
      setTotal(0)}
    }
  
  const handleonChangeQuantity = (value, i) => {

    let newQuantity = [...quantity];
    newQuantity[i] = value
    setQuantity(newQuantity)
  }

  const TotalAmount = () => {
    {
      let amount = 0
      cart.map((product, index) => {
        amount += ((product.price_in_cents) / 100) * quantity[index]
      })
      setTotal((amount).toFixed(2))

    }
  }

  useEffect(() => {
    const setQuant = async () => {
      const newQuantities = []
      cart.map(() => {
        newQuantities.push(1)
      })
      setQuantity(newQuantities);
      TotalAmount();
    };

    if (cart.length > 0) {
      setQuant();
    }
  }, [cart])

  useEffect(() => {
    if (quantity.length > 0)
      TotalAmount()
  }, [quantity])

  return (
    <div className='flex mr-48 ml-48 pt-10 pb-10 h-full min-h-screen'>
      <div className='flex flex-col w-full'>
        <Link to={"/"}>
          <div className='flex '>
            <img src='/back.svg' />
            <h1>Voltar</h1>
          </div>
        </Link>

        <h1 className='text-textDark font-semibold text-2xl mt-5 mb-5'>SEU CARRINHO</h1>
        <div className='flex'>
          <h2 className='text-textGrey mr-2'>Total( {cart.length} produtos) </h2>
          <h2 className='text-textDark font-semibold'>R${total}</h2>
        </div>


        <div className='grid grid-cols-3 w-full '>
          <div className='flex flex-col col-span-2'>
            {cart && cart.map((product, index) => (

              <div className='bg-white h-[300px] flex rounded-2xl mb-5 relative' key={index}>
                <img src={product.image_url} className="rounded-l-2xl w-[350px]"></img>
                <div className='flex flex-col w-full' >
                  <div className='m-4 text-2xl text-textDark'>{product.name}</div>
                  <div className='m-4 text-2xl text-textDark text-lg'>{product.description}</div>
                  <div className='flex justify-between  items-center' >
                    <select className='border rounded-lg bg-bgGrey border-[#A8A8B3] ml-4 p-2 text-dark'
                      onChange={(e) => handleonChangeQuantity(e.target.value, index)} value={quantity[index]}>
                      <option value={1} >1</option>
                      <option value={2} >2</option>
                      <option value={3} >3</option>
                    </select>
                    <h2 className='mr-5 font-semibold text-xl'>R$ {product.price_in_cents / 100}</h2>
                  </div>
                </div>
                <img className='absolute top-5 right-5 ' src='/delete.svg' onClick={() => handleonClickRemoveProduct(product, index)}></img>
              </div>
            ))}
          </div>
          <div className='h-[80vh] bg-white ml-10 relative col-span-1 col-start-3 row-start-1' >
            <h1 className='text-textDark font-semibold m-10 text-xl'>RESUMO DO PEDIDO</h1>
            <div className='flex justify-between text-lg'>
              <h2 className='ml-10'>Subtotal de produtos:</h2>
              <h2 className='mr-10'>R$ {Number(total)}</h2>
            </div>
            <div className='flex justify-between text-lg  '>
              <h2 className='ml-10'>Entrega:</h2>
              <h2 className='mr-10'>{Number(total) < 900 ? "R$40,00" : "GRÁTIS"}</h2>
            </div>
            <div className='w-[80%] bg-dark h-[2px] m-auto mt-4'></div>
            <div className='flex justify-between text-lg  '>
              <h2 className=' text-textDark font-semibold m-10 '>TOTAL:</h2>
              <h2 className=' m-10'>R$ {(Number(total) + 40).toFixed(2)}</h2>
            </div>
            <div className='flex justify-center'>
              <button className='bg-[#51B853] w-[80%] rounded-md h-12 text-white'>FINALIZAR A COMPRA </button>
            </div>
            <div className='bottom-0 left-0 text-dark underline absolute m-10 font-semibold'>
              <h3>AJUDA</h3>
              <h3>REEMBOLSOS</h3>
              <h3>ENTREGAS E FRETES</h3>
              <h3>TROCAS E DEVOLUÇÕES</h3>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Cart