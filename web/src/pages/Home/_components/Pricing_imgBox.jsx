import React from 'react'

export default function PricingImgBox({image, text}) {
  return (
    <div className=' '>
        <img src={image} alt=""  className='relative '/>
        <p className='text-small text-gray-500 absolute left-2 -top-4'>{text}</p>
    </div>
  )
}
