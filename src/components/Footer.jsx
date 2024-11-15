import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaArrowUp } from 'react-icons/fa6'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <>
    <section className='bg-slate-200 w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-6 border-[20px] border-white'>
      <h1 className='text-black font-bold text-5xl'>Barber<span className='italic text-gray-900'>Shop</span></h1>
      <p className='text-lg text-center font-semibold text-slate-600' >© 2022 BarberShop. All rights reserved</p>
      <div id='icons' className='flex justify-center items-center gap-6'>
       
        <div id='icon-box' className='bg-gray-900 p-2 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300'>
          <FaFacebook className='text-white size-4' />
        </div>
       
        <div id='icon-box' className='bg-gray-900 p-2 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300'>
          <FaInstagram className='text-white size-4' />
        </div>

        <div id='icon-box' className='bg-gray-900 p-2 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300'>
          <FaTwitter className='text-white size-4' />
        </div>

        <div id='icon-box' className='bg-gray-900 p-2 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300'>
          <FaLinkedin className='text-white size-4' />
        </div>
      </div>

    </section>
    <div data-aos="slide-right" data-aos-delay="200" id='icon-box' className='bg-gray-900 p-4 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-12 bottom-5 right-5 lg:right-5'>
  <Link to='hero' smooth={true} duration={1000}>
    <FaArrowUp className='text-white size-4 cursor-pointer' />
  </Link>
</div>

    </>
  )
}

export default Footer