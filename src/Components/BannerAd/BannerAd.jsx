import React from 'react'
import OrangeButton from '../OrangeButton/OrangeButton'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BannerAd = () => {

  const getData = useSelector((state)=>{
    return state.cart.data
  })

  return (
    <section>
        <div className="p-5 block min-sm:block min-md:flex justify-between items-center bg-[#FFE7D6]">
            <div className="text w-5/5 min-sm:w-5/5 min-md:3/5 relative">
                <h5 className='px-5 absolute py-2 bg-[#2DA5F3] uppercase -top-13 min-sm:-top-13 min-md:top-0 text-sm text-white mb-3'>save up to $200</h5>
                <h2 className='font-semibold mt-13 mb-6 text-6xl'>Macbook Pro</h2>
                <p className=' mb-6'>Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage</p>
                <Link to={`/clicon/product_page/${1}`}><OrangeButton /></Link>
            </div>
            <div className="image w-5/5 min-sm:w-5/5 min-md:2/5 relative">
                <img src={getData[0].productImage} className='w-full' alt="" />
            </div>
        </div>
    </section>
  )
}

export default BannerAd