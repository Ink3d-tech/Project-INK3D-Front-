import React from 'react'
import logoEx from "../../../public/png-clipart-round-multicolored-logo-vanamo-logo-icons-logos-emojis-tech-companies-thumbnail.png"
import { Bell, DollarSign, FileText, Globe2Icon, Heart, HelpCircle, Home, List, Search, Shirt, ShoppingBag, Star, Tag, User } from 'lucide-react'

export default function HamburguerMenu() {
    return (
        <div>
            <div className='flex flex-col items-center bg-black px-5'>
                <div className='flex flex-row my-3 gap-4 items-center'>
                    <img src={logoEx.src} className='h-14 rounded-full' alt='inkedlogo'/>
                    <div>
                        <p className='text-white'>Bienvenido</p>
                        <p className='text-gray-500 text-sm'>Ingresa a tu cuenta para ver tus compras,
                        favoritos, magazine, etc</p>
                    </div>
                </div>
                <div className='mb-2 grid grid-cols-2 gap-2 w-full'>
                <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium 
                    rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                    Iniciar Sesión</button>
                <button type="button" className="w-full text-blue-700 bg-white hover:bg-gray-300 font-medium 
                    rounded-md text-sm px-5 py-2.5 me-2 mb-2 ">
                    Crear Cuenta</button>
                </div>
            </div>

            <div className='flex flex-col pt-5 px-8 gap-5 '>
                <div className='flex gap-5'>
                    <Home color='blue'/>
                    <p className='text-blue-500 font-semibold'>Inicio</p>
                </div>
                <div className='flex gap-5'>
                    <Search />
                    <p className=' font-semibold'>Buscar</p>
                </div>
                <div className='flex gap-5'>
                    <Bell />
                    <p className=' font-semibold'>Notificaciones</p>
                </div>
                <div className='flex gap-5'>
                    <ShoppingBag />
                    <p className=' font-semibold'>Mis compras</p>
                </div>
                <div className='flex gap-5'>
                    <Heart />
                    <p className=' font-semibold'>Favoritos</p>
                </div>
                <div className='flex gap-5'>
                    <Tag />
                    <p className=' font-semibold'>Ofertas </p>
                </div>
                <div className='flex gap-5'>
                    <User />
                    <p className=' font-semibold'>Mi cuenta</p>
                </div>
                <div className='flex gap-5'>
                    <HelpCircle />
                    <p className=' font-semibold'>Ayuda</p>
                </div>
                <div className='flex gap-5 border-b-2 border-gray-300'></div>
                <div className='flex gap-5'>
                    <Shirt />
                    <p className=' font-semibold'>Moda</p>
                </div>
                <div className='flex gap-5'>
                    <Globe2Icon />
                    <p className=' font-semibold'>Compra internacional</p>
                </div>
                <div className='flex gap-5'>
                    <Star />
                    <p className=' font-semibold'>Mas vendidos</p>
                </div>
                <div className='flex gap-5'>
                    <FileText />
                    <p className=' font-semibold'>Magazine (corregir icono)</p>
                </div>
                <div className='flex gap-5'>
                    <List />
                    <p className=' font-semibold'>Categorias</p>
                </div>
                <div className='flex gap-5 border-b-2 border-gray-300'></div>
                <p className='font-semibold'>Acerca de INK3D</p>
            </div>
        </div>
    )
}
