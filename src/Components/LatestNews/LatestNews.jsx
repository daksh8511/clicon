import React from 'react'

import ln1 from '/assets/ln1.png'
import ln3 from '/assets/ln3.png'
import ln2 from '/assets/ln2.png'

import { GrLinkNext } from "react-icons/gr";
import { FaRegUserCircle, FaRegCalendar } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

const LatestNews = () => {
  return (
    <section className='container'>
        <div className="p-5">
            <h2 className='text-center text-3xl font-bold mt-18 mb-10'>Latest News</h2>

            <div className='grid grid-cols-1 min-sm:grid-cols-1 min-md:grid-cols-3 gap-6'>
                <div className='bg-white p-7'>
                    <img src={ln3} alt="" className='w-full' />
                    <div className="box">
                        <div className="userInfo flex items-center gap-3 my-3">
                            <div className="flex items-center gap-1">
                                <FaRegUserCircle className='text-orange-500' />
                                <h5 className='text-gray-500'>Krishtin</h5>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaRegCalendar className='text-orange-500' />
                                <h5 className='text-gray-500'>19Dec, 2016</h5>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaRegMessage className='text-orange-500' />
                                <h5 className='text-gray-500'>450</h5>
                            </div>
                        </div>
                        <div className="titles">
                            <h3 className='text-gray-900 font-bold text-lg mb-5'>Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</h3>
                            <p className='mb-6'>Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</p>
                            <button className='border cursor-pointer border-orange-500 hover:border-0 px-5 py-2 flex text-orange-500 hover:text-white hover:bg-orange-500 transition-all duration-300 gap-3 items-center mt-4'>Read More <GrLinkNext/></button>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-7'>
                    <img src={ln2} alt="" className='w-full' />
                    <div className="box">
                        <div className="userInfo flex items-center gap-3 my-3">
                            <div className="flex items-center gap-1">
                                <FaRegUserCircle className='text-orange-500' />
                                <h5 className='text-gray-500'>Krishtin</h5>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaRegCalendar className='text-orange-500' />
                                <h5 className='text-gray-500'>19Dec, 2016</h5>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaRegMessage className='text-orange-500' />
                                <h5 className='text-gray-500'>450</h5>
                            </div>
                        </div>
                        <div className="titles">
                            <h3 className='text-gray-900 font-bold text-lg mb-5'>Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</h3>
                            <p className='mb-6'>Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</p>
                            <button className='border cursor-pointer border-orange-500 hover:border-0 px-5 py-2 flex text-orange-500 hover:text-white hover:bg-orange-500 transition-all duration-300 gap-3 items-center mt-4'>Read More <GrLinkNext/></button>
                        </div>
                    </div>
                </div>

                <div className='bg-white p-7'>
                    <img src={ln1} alt="" className='w-full' />
                    <div className="box">
                        <div className="userInfo flex items-center gap-3 my-3">
                            <div className="flex items-center gap-1">
                                <FaRegUserCircle className='text-orange-500' />
                                <h5 className='text-gray-500'>Krishtin</h5>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaRegCalendar className='text-orange-500' />
                                <h5 className='text-gray-500'>19Dec, 2016</h5>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaRegMessage className='text-orange-500' />
                                <h5 className='text-gray-500'>450</h5>
                            </div>
                        </div>
                        <div className="titles">
                            <h3 className='text-gray-900 font-bold text-lg mb-5'>Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</h3>
                            <p className='mb-6'>Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</p>
                            <button className='border cursor-pointer border-orange-500 hover:border-0 px-5 py-2 flex text-orange-500 hover:text-white hover:bg-orange-500 transition-all duration-300 gap-3 items-center mt-4'>Read More <GrLinkNext/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LatestNews