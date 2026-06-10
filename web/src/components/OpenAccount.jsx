import React from 'react'
import BlueButton from './BlueButton'

export default function OpenAccount() {
  return (
    <div className='flex flex-col gap-2 items-center justify-around mt-12 mb-12'>
      <h1 className='text-xl md:text-3xl text-slate-700 mb-8 font-semibold'>Open a Zerodha account</h1>
      <p className='text-base/7  mb-6 text-gray-500'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
      <BlueButton/>
    </div>
  )
}
