import React from 'react'

import { FaLongArrowAltRight } from "react-icons/fa";

import google from '/assets/companies/google.png'
import amazon from '/assets/companies/amazon.png'
import philips from '/assets/companies/philips.png'
import toshiba from '/assets/companies/toshiba.png'
import samsung from '/assets/companies/samsung.png'


const Newslatter = () => {
  return (
    <section className='container'>
        <div className="p-5">
            <div className="text-center text-white">
                <h2 className='text-3xl font-bold mb-4'>Subscribe to our newsletter</h2>
                <p>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
            </div>
            <form action="" className='bg-white w-full p-2 m-auto block min-sm:block min-md:flex min-md:w-[600px] justify-between my-8'>
                <input type="email" placeholder='Enter Email' className='w-full px-3 border-0 outline-0 mb-3 min-sm:mb-3 min-md:mb-0' />
                <button className='flex items-center gap-3 uppercase bg-orange-500 p-2 text-white font-bold'>subscribe <FaLongArrowAltRight /> </button>
            </form>
            <div className="companies block min-sm:block min-md:flex justify-center gap-12">
                <img src={google} alt="" className='max-sm:m-auto max-md:m-auto' />
                <img src={amazon} alt="" className='max-sm:m-auto max-md:m-auto'/>
                <img src={philips} alt=""className='max-sm:m-auto max-md:m-auto' />
                <img src={toshiba} alt=""className='max-sm:m-auto max-md:m-auto' />
                <img src={samsung} alt=""className='max-sm:m-auto max-md:m-auto' />
            </div>
        </div>
    </section>
  )
}

export default Newslatter