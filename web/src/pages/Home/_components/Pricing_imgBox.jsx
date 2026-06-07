import React from 'react'

export default function PricingImgBox({image, line1, line2}) {
  return (
    <div className='relative w-[90%]'> 
        <img src={image} alt="" className='w-full block'/> 
        <div className='absolute bottom-2 left-3 lg:bottom-3 lg:left-3 flex flex-col'>
            <p className='text-xs text-gray-500'>{line1}</p>
            <p className='text-xs text-gray-500'>{line2}</p>
        </div>
        
    </div>
  )
}