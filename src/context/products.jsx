import React,{createContext,useState} from "react";
import generateFakeProducts from '../Products/db'
export const ProductContext= createContext([])


function ProductProvider({children}){
    const [data,setData]=useState(generateFakeProducts())
    return(
        <ProductContext.Provider value={{data,setData}}>
            {children}
        </ProductContext.Provider> 
    )
}

export default ProductProvider