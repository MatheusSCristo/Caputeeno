import React, { useContext, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { ProductContext } from '../context/products'
import { CartProductContext } from '../context/cartproducts'

const Product = () => {
  const {data } = useContext(ProductContext)
  const { addProduct } = useContext(CartProductContext)
  const [products, setProducts] = useState()

  const { id } = useParams()
  useState(() => {
    setProducts(data)
  })
  
  const HandleonClickCartAdd=(product)=>{
    addProduct(product)
  }

  return (
    <div className='flex flex-col mr-48 ml-48 pt-10 pb-10'>
      <Link to={"/Caputeeno/"}>
        <div className='flex '>
          <img src='../back.svg' />
          <h1>Voltar</h1>
        </div>
      </Link>
      {products &&
        products.map((product, key) => (
          product.id === id &&
          <div className='mt-5 grid grid-cols-2' key={key}>
            <div>
              <img src={product.image_url} className='w-full' />
            </div>
            <div className='ml-10 text-dark relative '>
              <h1 className='text-xl'>{product.category}</h1>
              <h1 className='text-5xl '>{product.name}</h1>
              <h2 className=' text-[#09090A] font-semibold text-2xl'>R$ {(product.price_in_cents) / 100}</h2>
              <h3 className='mt-4 mb-16 text-textDark'>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</h3>
              <h4 className='mb-2 font-600'>DESCRIÇÃO</h4>
              <h5 className='text-textDark w-[500px]'>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</h5>
              <div  onClick={()=>HandleonClickCartAdd(product)} className='bottom-0 absolute flex ml-5 text-white w-[450px] h-12 bg-blue justify-center items-center rounded cursor-pointer'>
                <button className=' w-[250px]  bg-cartIcon bg-no-repeat font-600' >ADICIONAR AO CARRINHO </button>
              </div>
            </div>
          </div>

        ))}




    </div>
  )
}

export default Product