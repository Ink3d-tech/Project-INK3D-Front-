import React from 'react';
import { LucideSearch, Menu,  ShoppingCart, X } from 'lucide-react';

export default function NavBar() {
  return (
    <div className='bg-black text-white h-14 flex '>
      <div className='my-auto mr-auto ml-4'>

        {/* descomenta uno de los dos iconos */}

        {/* <Menu size='24' color='gray'/> */}
        <X size='24' color='gray'/>
      </div>

      <div className='my-auto mx-5 px-1 py-1 bg-white text-gray-500 w-full flex gap-1'>
        <LucideSearch size='20' color='gray' className='my-auto'/>
        <h2>Estoy buscando...</h2>
      </div>

      <div className='my-auto ml-auto mr-4'>
        <ShoppingCart size='24' color='gray'/>
      </div>  
    </div>
  )
}
