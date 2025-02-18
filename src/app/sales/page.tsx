import CategoriesSales from '@/shared/components/CategoriesSales.component'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import React from 'react'

export default function Sales() {
  return (
    <div>
        <div className='bg-black h-12 flex items-center px-3'>
            <ArrowLeft color='gray' size={22}/>
            <h1 className='text-some-gray ml-2 text-base'>Ofertas</h1>
        </div>
        <div className='bg-white h-12 flex justify-between items-center px-3 shadow-xl shadow-black border-b-2'>
            <p className='text-some-gray text-xs'>1000 productos</p>
            <div className='flex  items-center'>
                <p className='text-blue-500'>Filtrar</p>
                <ChevronDown color='blue' size={16} className='mt-1'/>
            </div>
        </div>
        <div>
            <CategoriesSales />
        </div>
    </div>
  )
}
