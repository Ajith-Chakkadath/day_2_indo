import React from 'react'
import munnar from '../assets/munnar.jpg'
import tajmahal from '../assets/tajmahal.jpg'
import rajasthan from '../assets/rajasthan.jpg'
import ladhak from '../assets/ladhak.jpg'

const LocationSection = () => {
  return (
   <section className='mt-[100px] p-12 '>
       <div className='grid grid-cols-6 gap-4'>
           <div className=' mb-20 col-span-2'>
               <h4 className='text-xl text-slate-400'>Best Location</h4>
               <h1 className='text-5xl font-bold mt-3'>Indian Tourism</h1>
           </div>
           <div className='col-start-3 col-end-7 mb-20'>
            <p className='text-2xl text-end text-slate-600'>Extraordinary natural beauty, enjoy the rich culture,<br /> and experience the friendliness of the local people</p>
           </div>
           <div className=" relative h-[400px] p-8 rounded-3xl col-span-4 bg-cover bg-center"
        style={{
            backgroundImage: ` url(${munnar})`,
        }}>
        <div className='absolute bottom-0 left-0 p-8 text-white'>
            <h1 className='text-2xl font-bold'>Munnar</h1>
            <p className='text-xl text-slate-300'>Munnar: Tranquil, Scenic, Refreshing.</p>
        </div>
    </div>
    <div className=" relative h-[400px] p-8 rounded-3xl col-span-2 bg-cover bg-center"
        style={{
            backgroundImage: ` url(${tajmahal})`,
        }}>
        {/* Add your content here */}
        <div className='absolute bottom-0 right-0 p-8 text-white text-end'>
            <h1 className='text-2xl font-bold'>Taj Mahal</h1>
            <p className='text-xl text-slate-300'>Taj Mahal: Majestic, Timeless, Iconic.</p>
        </div>
    </div>
    <div className="relative h-[400px] p-8 rounded-3xl col-span-2 bg-cover bg-center"
        style={{
            backgroundImage: ` url(${ladhak})`,
        }}>
        {/* Add your content here */}
        <div className='absolute bottom-0 left-0 p-8 text-white'>
            <h1 className='text-2xl font-bold'>Ladakh</h1>
            <p className='text-xl text-slate-300'>Ladakh: Rugged, Remote, Breathtaking.</p>
        </div>
    </div>
    <div className="relative h-[400px] p-8 rounded-3xl col-span-4 bg-cover bg-center"
        style={{
            backgroundImage: ` url(${rajasthan})`,
        }}>
        {/* Add your content here */}
        <div className='absolute bottom-0 right-0 p-8 text-white text-end'>
            <h1 className='text-2xl font-bold'>Rajasthan</h1>
            <p className='text-xl text-slate-300'>Rajasthan: Tranquil, Scenic, Refreshing.</p>
        </div>
    </div>

       </div>
   </section>
  )
}

export default LocationSection