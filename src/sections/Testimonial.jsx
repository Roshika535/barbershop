import { useEffect } from 'react'
import React  from 'react'
import client1 from '../assets/images/client1.png'
import client2 from '../assets/images/client2.png'
import client3 from '../assets/images/client3.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'

const clients = [
  {
    Image: client1,
    Name: 'John Doe',
    Review: "Best haircut I've ever had! The barbers are skilled and really listen to what you want. I always leave feeling fresh and confident.",
    },
    {
      Image: client2,
      Name: 'Sarah Smith',
      Review:"Took my son for his first haircut and the experience was fantastic. The barbers were patient and made it fun for him. We'll definitely be back!",
      },
      {
        Image: client3,
        Name: 'Elena Johnson',
        Review: "Excellent service and great value for money. The scalp treatments and facials are a nice addition to the usual haircut.",
        }
  ]

const Testimonial = () => {
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
   <section id='testimonials' className="w-full mt-8 md:px-[20px] md:h-165vh h-fit px-10 py-20 flex flex-col justify-center items-center gap-6 bg-gray-900 mb-[20px] ">
    <h1 data-aos="zoom-in" className='text-6xl text-white font-bold text-center'>Testimonials</h1>
    <p data-aos="zoom-in" className='text-xl text-white font-semibold text-center'>What our clients have to say about their experience with us!</p>
    
    <div id='clients' className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6'>
      
      {clients.map((client, index) => (
        <div data-aos="slide-up " key={index} className='bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl '>
          <div className='flex justify-center items-center gap-4 ralative'>
            <BiSolidQuoteAltLeft className='text-black size-16 absolute-left-0 opacity-30' />
          <h1 className='text-[25px] text-black font-bold'>{client.Name}</h1>
          <img src={client.Image} alt="" className='size-16 transform hover:scale-125 transition-tranasform duration-300 cursor-pointer' />
          </div>
          <p>{client.Review}</p>
        </div>
      ))}
    </div>
   </section>
    </>
  )
}

export default Testimonial