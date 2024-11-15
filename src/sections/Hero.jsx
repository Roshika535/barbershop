import React, { useEffect } from 'react'
import hero from '../assets/images/hero.jpg'
import sissor from '../assets/images/sissor.png'
import menshair from '../assets/images/menshair.png'
import trimmer from '../assets/images/trimmer.png'
import womenhair from '../assets/images/womenhair.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail, MdHeadphones, MdOutlinePhoneAndroid } from 'react-icons/md'
export const Hero = () => {
    useEffect(() => {
        Aos.init({
            offset: 200, 
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,

        });
    },[])
  return (
    <>
        <section id='hero' className="w-full md:px-[120px] px-10 flex flex-col md:flex-row justify-center items-center gap-20">
            <div id='content-box' className=" flex flex-col justify-center items-start gap-10">
                <h1 data-aos="zoom-in" className='text-2xl text-black font-semibold'>WELCOME TO </h1>
                <h1 data-aos="zoom-in" className='text-6xl text-black font-bold'>BARBERSHOP <br />in Manhattan <br />NEW YORK</h1>
                <div data-aos="slide-up" id='icon-list' className="flex flex-col justify-center items-start gap-6"></div>
                
                <div id="icon-box" className="flex justify-center items-center gap-3">
                    <FaLocationDot className='text-black size-6' />
                    <h1 className='text-xl text-gray-800 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </div>

                <div id="icon-box" className="flex justify-center items-center gap-3">
                    <MdOutlinePhoneAndroid className='text-black size-6' />
                    <h1 className='text-xl text-gray-800 font-semibold'> +1 212-344-1230 / +1 212-555-1230 </h1>
                </div>

                <div id="icon-box" className="flex justify-center items-center gap-3">
                    <MdEmail className='text-black size-6' />
                    <h1 className='text-xl text-gray-800 font-semibold'>barbershop@gmail.com</h1>
                </div>

                <div id="icon-box" className="flex justify-center items-center gap-3">
                    <MdHeadphones className='text-black size-6' />
                    <h1 className='text-xl text-gray-800 font-semibold'>customer@gmail.com</h1>
                </div>

                <button data-aos="zoom-in" id='book-btn' className='px-10 py-4 rounded-xl border-2 border-black text-black font-semibold hover:bg-black hover:text-white'>Book Now</button>
            </div>
            <div data-aos="zoom-in" id='image-box' className="md:w-1/2 w-full">
            <img src={hero} alt="" className='rounded-xl w-full md:h-[700px] h-[500px]'/>
            </div>
        
        </section>
        <section className='grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full md:px-[120px] px-10 py-10 gap-10  '>
            <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4'>
                <img src={sissor} alt="" className='size-16 transform hover:rotate-6 hover:scale-110 transition:transform duration-300 cursor-pointer'/>
                <h1 className='text-2xl text-black font-semibold'>Regular Haircut</h1>
                <button className='px-10 py-3 rounded-xl border-2 border-black text-black font-semibold hover:bg-black hover:text-white'>More</button>
            </div>

            <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4'>
                <img src={menshair} alt="" className='size-16 transform hover:rotate-6 hover:scale-110 transition:transform duration-300 cursor-pointer'/>
                <h1 className='text-2xl text-black font-semibold'>Haircut and Shave</h1>
                <button className='px-10 py-3 rounded-xl border-2 border-black text-black font-semibold hover:bg-black hover:text-white'>More</button>
            </div>

            <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4'>
                <img src={trimmer} alt="" className='size-16 transform hover:rotate-6 hover:scale-110 transition:transform duration-300 cursor-pointer'/>
                <h1 className='text-2xl text-black font-semibold'>Beard Trim</h1>
                <button className='px-10 py-3 rounded-xl border-2 border-black text-black font-semibold hover:bg-black hover:text-white'>More</button>
            </div>

            <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4'>
                <img src={womenhair} alt="" className='size-16 transform hover:rotate-6 hover:scale-110 transition:transform duration-300 cursor-pointer'/>
                <h1 className='text-2xl text-black font-semibold'>Women's Haircut</h1>
                <button className='px-10 py-3 rounded-xl border-2 border-black text-black font-semibold hover:bg-black hover:text-white'>More</button>
            </div>
        </section>
    </>
  )
}

