import React from 'react'

import { GoPackage } from "react-icons/go";
import { CiTrophy, CiCreditCard1, CiHeadphones } from "react-icons/ci";

const Features = () => {
  return (
    <section>
        <div className="p-5 grid grid-cols-1 min-sm:grid-cols-1 min-md:grid-cols-2 min-md:gap-3 min-lg:grid-cols-4 border border-gray-300">
            <div className="flex items-center gap-3 ">
                <GoPackage className='text-3xl' />
                <div>
                    <h2>Fasted Delivery</h2>
                    <h4>Delivery in 24/H</h4>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <CiTrophy className='text-3xl' />
                <div>
                    <h2>24 Hours Return</h2>
                    <h4>100% money-back guarantee</h4>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <CiCreditCard1 className='text-3xl' />
                <div>
                    <h2>Secure Payment</h2>
                    <h4>Your money is safe</h4>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <CiHeadphones className='text-3xl' />
                <div>
                    <h2>Secure Payment</h2>
                    <h4>Your money is safe</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features