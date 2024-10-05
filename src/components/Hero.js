import React from 'react';
import mountain from '../assets/mountain.jpg';
import { IoMdArrowDropdown } from "react-icons/io";

const Hero = () => {
  return (
    <section className="p-4 mx-auto w-full h-screen relative ">
      <div
        className="h-[90%] p-8 rounded-3xl  "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${mountain})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '1.5rem' // Keeping the border radius on the div
        }}
      >
       <div className='flex justify-between items-center'>
           <h1 className='text-white text-3xl font-bold'>INDOTRAVI</h1>
           <div className='bg-white pl-3 pr-3 pt-2 pb-2 rounded-full bg-opacity-20 backdrop-filter backdrop-blur-xl backdrop-contrast-125'>
                <ul className='flex jutify-between items-center gap-7 text-white'>
                    <li className='text-lg'>About </li>
                    <li className='text-lg'>Services</li>
                    <li className='text-lg'>Trip</li>
                    <li className='text-lg'>Packages</li>
                    <li className='text-lg'>Contact</li>
                </ul>
           </div>
           <button className='bg-white text-black px-3 py-1 rounded-2xl'>Login</button>
       </div>

       <h1 className='text-center text-8xl text-white mt-40 font-bold'> Extraordinary natural and <br></br> cultural charm</h1>

       <h3 className='text-gray-400 text-center mt-10 text-2xl'>Explore india is an unforgettable adventure</h3>

       <div className='flex justify-between items-center text-white mt-10 w-[600px] bg-white bg-opacity-20 backdrop-filter backdrop-blur-xl px-3 py-2 rounded-full mx-auto'>
           <div className='flex justify-around items-center gap-5'>
               <h2>Date</h2>
               <IoMdArrowDropdown />
           </div>
           <div className='w-[1px] h-6 bg-black'></div>
           <div className='flex justify-around items-center gap-5'>
               <h2>Budget</h2>
               <IoMdArrowDropdown />
           </div>
           <div className='w-[1px] h-6 bg-black'> </div>
           <div className='flex justify-around items-center gap-5'>
               <h2>Guest</h2>
               <IoMdArrowDropdown />
           </div>
           <div className='w-[1px] h-6 bg-black'></div>
           <div className='bg-white rounded-full px-4 py-2'>
               <h2 className='text-black'>Search</h2>
           </div>
       </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 px-20 py-2 flex justify-between items-center'>
  <div className='w-64 h-32 bg-white rounded-2xl flex flex-col justify-center items-center'>
    <h1 className='text-4xl font-bold'>10M+</h1>
    <p className='text-xl mt-2'>Total Customer</p>
  </div>
  <div className='w-64 h-32 bg-white rounded-2xl flex flex-col justify-center items-center'>
    <h1 className='text-4xl font-bold'>09+</h1>
    <p className='text-xl mt-2'>Years of Experience</p>
  </div>
  <div className='w-64 h-32 bg-white rounded-2xl flex flex-col justify-center items-center'>
    <h1 className='text-4xl font-bold'>12k</h1>
    <p className='text-xl mt-2'>Total Destination</p>
  </div>
  <div className='w-64 h-32 bg-white rounded-2xl flex flex-col justify-center items-center'>
    <h1 className='text-4xl font-bold'>5.0</h1>
    <p className='text-xl mt-2'>Average Rating</p>
  </div>
</div>

    </section>
  );
};

export default Hero;
