import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import AllCategory from './AllCategory';

const BottomNav = () => {
  return (
    <section>
        <div className="container p-5 border-b border-gray-300 block min-sm:block min-md:flex justify-between items-center">
            <div className="menu_container block min-sm:block min-md:flex gap-5">
                <div className="category">
                    <AllCategory />
                </div>
                
            </div>
            <div className='flex justify-center items-center gap-2 my-5 min-sm:my-5 min-md:my-0'>
                <FaPhoneVolume />
                <span>+1-202-555-0104</span>
            </div>
        </div>
    </section>
  )
}

export default BottomNav