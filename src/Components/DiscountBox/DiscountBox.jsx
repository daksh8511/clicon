import React from 'react'

const DiscountBox = ({discountNumber}) => {
  return (
    <div className='bg-[#EFD33D] p-2 w-2/5 text-center mb-2 text-sm font-bold'>
        {discountNumber}% OFF
    </div>
  )
}

export default DiscountBox