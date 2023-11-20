import React, { useContext } from 'react'
import Buttonscrolls from './Buttonscrolls'
import { ProductContext } from '../context/products'
import { LookingContext } from '../context/looking'

const Buttonnav = ({HandleonClickPage,productsPage,setSearched,searched,setOrganize}) => {
    const {  setLookingFor } = useContext(LookingContext)
    
    return (
        <div className='flex justify-between pt-8 '>
            <div className='flex justify-evenly text-xl text-dark font-semibold'>
                <h2 className= {`mr-6 hover:text-textDark 
                ${!searched?"text-textDark underline decoration-[#FFA585] underline-offset-[8px]":"text-dark "} ` }  onClick={()=>{setLookingFor("");setSearched()}}>TODOS OS PRODUTOS</h2>
                <h2 className= {`mr-6 hover:text-textDark 
                ${searched==="t-shirts"?"text-textDark underline decoration-[#FFA585] underline-offset-[8px]" :"text-dark"} ` }onClick={()=>{setLookingFor("");setSearched("t-shirts")}}>CAMISETAS</h2>
                <h2 className= {`mr-6 hover:text-textDark 
                ${searched==="mugs"?"text-textDark underline decoration-[#FFA585] underline-offset-[8px]":"text-dark"} ` }onClick={()=>{setLookingFor("");setSearched("mugs")}}>CANECAS</h2>
            </div>

            <div className='flex flex-col items-end '>
                <select className='bg-bgGrey text-textGrey mb-6 w-40 rounded 'onChange={(e)=>setOrganize(e.target.value)}>
                    <option disabled defaultValue={''} >Organizar por</option>
                    <option value={"news"}>Novidades</option>
                    <option value={"dsc/price"}>Preço:Maior-Menor</option>
                    <option value={"asc/price"}>Preço:Menor-Maior</option>
                    <option value={"sales"}>Mais vendidos</option>
                </select>
                <Buttonscrolls HandleonClickPage={HandleonClickPage} productsPage={productsPage}/>
            </div>
        </div>
    )
}

export default Buttonnav