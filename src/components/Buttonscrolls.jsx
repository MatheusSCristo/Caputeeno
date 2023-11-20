import React from 'react'

const pages = [1, 2, 3, 4, 5]
const right = ">"
const left = "<"
const Buttonscrolls = ({ HandleonClickPage, productsPage }) => {
    return (
        <div className='flex text-dark mb-5 font-saira font-400'>

            {pages.map((e, i) =>
                <div className=' cursor-pointer bg-[#E9E9F0] w-8 h-8 flex justify-center items-center rounded-md mr-2' key={i} onClick={() => HandleonClickPage(e)}>{e}</div>
            )}
            <div className='cursor-pointer bg-[#E9E9F0] w-8 h-8 flex justify-center items-center rounded-md ml-2'
                onClick={() => { if (productsPage > 0) {HandleonClickPage(productsPage )} }}>{left}</div>
            <div className='cursor-pointer bg-[#E9E9F0] w-8 h-8 flex justify-center items-center rounded-md ml-2'
                onClick={() => { if (productsPage < 4) {HandleonClickPage(productsPage + 2)} }}>{right}</div>


        </div>
    )
}

export default Buttonscrolls