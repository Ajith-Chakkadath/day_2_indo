import React from 'react'
import timepiece from "../assets/timepiece.jpg"
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md"
import { FaRegCompass } from "react-icons/fa";

const Click = () => {
  return (
    <section className='mt-[100px] p-12'>
      <div className='grid grid-cols-2 gap-2'>
        <div 
          className='w-[450px] h-[600px] bg-slate-400 m-5 mx-auto rounded-3xl bg-cover bg-center relative' 
          style={{
            backgroundImage: `url(${timepiece})`,
          }}
        >
            <div className='absolute bottom-0 left-0 right-0 p-3'>
            <div className='flex justify-between items-center text-white mt-10 w-[400px] bg-white bg-opacity-20 backdrop-filter backdrop-blur-xl px-3 py-2 rounded-full mx-auto'>
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
        
           <div className='bg-white rounded-full px-4 py-2'>
               <h2 className='text-black'>Search</h2>
           </div>
       </div>
       <p className='mt-5 mb-5 px-3 text-white text-center'>
       Lorem ipsum odor amet, consectetuer adipiscing elit. Augue dis augue cursus 
       </p>
            </div>
          
        </div>

        <div className='p-3 '>
          <p className='text-xl text-slate-400 mb-2'>How it work</p>
          <h1 className='text-4xl font-bold mb-5 text-black'>One click for you</h1>
          {/* Section one */}
          <div className='w-full bg-white h-[120px] rounded-2xl p-4 flex justify-between items-start gap-10'>
          <div className='bg-slate-300 w-12 h-12  flex items-center justify-center rounded-xl'>
          <FaSearch  size={32} className="text-center text-gray-600"/>
          </div>
          <div>
              <h1 className='text-xl font-bold text-gray-700'>Find your destination</h1>
              <p className='text-md text-slate-400'>Lorem ipsum odor amet, consectetuer adipiscing
elit. Audue dis audue cursusi</p>
          </div>
          </div>
 {/* Section 2 */}
          <div className='w-full  h-[120px] rounded-2xl p-4 flex justify-between items-start gap-10 mt-3'>
          <div className='bg-white w-12 h-12  flex items-center justify-center rounded-xl'>
          <LuMessagesSquare size={32} className="text-center text-gray-600"/>
          </div>
          <div>
              <h1 className='text-xl font-bold text-gray-700'>Book a ticket</h1>
              <p className='text-md text-slate-400'>Lorem ipsum odor amet, consectetuer adipiscing
elit. Audue dis audue cursusi</p>
          </div>
          </div>
 {/* Section three */}
          <div className='w-full h-[120px] rounded-2xl p-4 flex justify-between items-start gap-10 mt-3'>
          <div className='bg-white w-12 h-12  flex items-center justify-center rounded-xl'>
          <MdOutlinePayments  size={32} className="text-center text-slate-600"/>
          </div>
          <div>
              <h1 className='text-xl font-bold text-gray-700'>Make Payment</h1>
              <p className='text-md text-slate-400'>Lorem ipsum odor amet, consectetuer adipiscing
elit. Audue dis audue cursusi</p>
          </div>
          </div>
 {/* Section four */}
          <div className='w-full h-[120px] rounded-2xl p-4 flex justify-between items-start gap-10 mt-3'>
          <div className='bg-white w-12 h-12  flex items-center justify-center rounded-xl'>
          <FaRegCompass  size={32} className="text-center text-slate-600"/>
          </div>
          <div>
              <h1 className='text-xl font-bold text-gray-700'>Explore destination</h1>
              <p className='text-md text-slate-400'>Lorem ipsum odor amet, consectetuer adipiscing
elit. Audue dis audue cursusi</p>
          </div>
          </div>

          
        </div>
       
      </div>
    </section>
  )
}

export default Click
