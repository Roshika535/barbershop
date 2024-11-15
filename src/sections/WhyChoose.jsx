import React, { useEffect } from 'react'
import why3 from  '../assets/images/why3.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaAngleDoubleRight } from 'react-icons/fa'
const WhyChoose = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        })
    }, [])
  return (
    <>
    <section id='about' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col md:flex-row justify-center items-center gap-20 bg-cover bg-center' style={{ backgroundImage: `url(${why3})` }}>
        
    <div data-aos="zoom-in" className="flex flex-col justify-center items-center gap-10 bg-white p-10 rounded-3xl shadow-2xl md:w-[40%] w-full">
        <h1 className='text-themeyellow text-4xl font-bold'>WORKING HOURS</h1>
        <div className='flex flex-col justify-center items-center gap-4'>
            <p className='text-xl text-black font-lg'> SUNDAY 10 AM - 8 PM</p>
            <p className='text-xl text-black font-lg'> MONDAY 10 AM - 8 PM</p>
            <p className='text-xl text-black font-lg'> TUESDAY 10 AM - 8 PM</p>
            <p className='text-xl text-black font-lg'> WEDNESDAY 10 AM - 8 PM</p>
            <p className='text-xl text-black font-lg'> THURSDAY 10 AM - 8 PM</p>
            <p className='text-xl text-black font-lg'> FRIDAY 10 AM - 8 PM</p>
            <p className='text-xl text-black font-lg'> SATURDAY 10 AM - 4 PM</p>
        </div>
        <button className='px-10 py-3 rounded-xl border-2 border-themeyellow text-themeyellow font-semibold hover:bg-themeyellow hover:text-white '>Book an Appointment</button>  
                   
        </div>

        <div data-aos="slide-up" data-aos-delay="200" className="flex flex-col justify-center items-start gap-6 h-fit  md:w-[40%] w-full">
            <h1 className='text-themeyellow text-4xl font-bold'>WHY CHOOSE US?</h1>
            <p className='text-xl font-semibold text-white'> Choose us for expert grooming, personalized service, and a welcoming community atmosphere.</p>
            <div id="icon-list" className="flex flex-col justify-center items-start gap-4">
                <div id='icon-box' className='flex justify-center items-center gap-3'>
                    <FaAngleDoubleRight className='text-white size-6'/>
                    <h1 className='text-xl text-white font-semibold'>Expert Knowledge and Skills.  </h1>
                </div>

                <div id='icon-box' className='flex justify-center items-center gap-3'>
                    <FaAngleDoubleRight className='text-white size-6'/>
                    <h1 className='text-xl text-white font-semibold'>We understand that every client is unique.  </h1>
                </div>

                <div id='icon-box' className='flex justify-center items-center gap-3'>
                    <FaAngleDoubleRight className='text-white size-6'/>
                    <h1 className='text-xl text-white font-semibold'>Welcoming and friendly atmosphere. </h1>
                </div>

                <div id='icon-box' className='flex justify-center items-center gap-3'>
                    <FaAngleDoubleRight className='text-white size-6'/>
                    <h1 className='text-xl text-white font-semibold'> Commitment to Hygiene and Safety
                    </h1>
                </div>
                <button className='text-black px-10 py-4 rounded-xl border-2 border-themeyellow text-themeyellow font-semibold hover:bg-themeyellow hover:text-white'>Learn More</button> 
            </div>
        </div>


    </section>
    </>
  )
}

export default WhyChoose