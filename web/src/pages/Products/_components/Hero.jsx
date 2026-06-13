import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Hero() {
  return (
    <div className='flex flex-col gap-6 justify-around pb-20 items-center text-center mb-16 border-b border-zinc-200 mt-10'> 
      <h1 className='text-2xl md:text-3xl font-semibold  text-black'>Zerodha Products</h1>
      <h2 className='text-lg md:text-xl  text-slate-800'>Sleek, modern and intuitive trading platforms </h2>
      <p className='text-slate-700 '>Checkout our <a href="http://localhost/products" target="_blank" className="text-blue-600 hover:text-slate-900 transition-colors font-medium">Investment offerings <ArrowForwardIcon /></a></p>
    </div>
  )
}
