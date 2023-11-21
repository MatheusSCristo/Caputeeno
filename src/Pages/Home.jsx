import React, { useEffect, useState, useContext } from 'react'
import Buttonnav from '../components/Buttonnav'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/products'
import { LookingContext } from '../context/looking'

const Home = () => {
  const { data } = useContext(ProductContext)
  const [products, setProducts] = useState([])
  const [productsPage, setProductsPage] = useState(0)
  const [searched, setSearched] = useState()
  const { lookingFor,setLookingFor } = useContext(LookingContext)
  const [organize,setOrganize]=useState()

  useEffect(() => {
    HandleonClickFilter(searched)
  }, [searched, productsPage, organize,lookingFor])


  const HandleonClickFilter = (searched) => {
    let newproducts = [...data]
    if (lookingFor) {
      setSearched("")
       newproducts = newproducts.filter((product) => product.name.toUpperCase().includes(lookingFor.toUpperCase()))
    }if (searched) {
      newproducts = newproducts.filter((product) => product.category === searched)
    }
    switch (organize) {
      case "sales":
        newproducts.sort((a, b) => b.sales - a.sales)
        break;
      case "asc/price":
        newproducts.sort((a, b) => a.price_in_cents - b.price_in_cents)
        break;
      case "dsc/price":
        newproducts.sort((a, b) => b.price_in_cents - a.price_in_cents)
        break;
      case "news":
        newproducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        break;
      default:
        break;

    }
    
    setProducts(newproducts.slice(productsPage * 12, productsPage * 12 + 12))
  }
  


  const HandleonClickPage = (page) => {
    const newpage = page - 1
    setProductsPage(newpage)
  }

  return (
    <div className='flex justify-center pb-32'>

      <div className='mr-48 ml-48'>
        <Buttonnav
          HandleonClickPage={HandleonClickPage}
          productsPage={productsPage}
          HandleonClickFilter={HandleonClickFilter}
          setSearched={setSearched}
          searched={searched}
          organize={organize}
          setOrganize={setOrganize}
        />
        <div className='grid grid-cols-4 gap-6'>
          {products.length > 0 && products.map((product, key) => (
            <div className='h-[330px] bg-white w-72 ' key={key}>
              <Link to={`/Caputeeno/product/${product.id}`}>
                <img src={product.image_url} className='w-72 rounded-md' />
                <h1 className='m-4 mb-1 border-b-2 border-[#DCE2E5] text-textDark'>{product.name}</h1>
                <h1 className='ml-4 text-[#09090A] font-semibold font-saira' >R${(product.price_in_cents) / 100}</h1>
              </Link>
            </div>

          ))}
        </div>

      </div>
    </div>
  )
}

export default Home