import React from 'react';
import EducationImg from '../../../assets/education.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from '@mui/material/Link';

export default function Education() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-6 mb-12 px-auto mx-auto'>
      <div>
        <img src={EducationImg} alt="Varsity"/>
      </div>
      <div className='max-w-[90%] mx-auto px-auto mb-12 lg:max-w-[45%]'>
        <h1 className='text-2xl md:text-3xl text-slate-700 font-semibold  mb-4 text-center'>Free and open market education</h1>
        <p className='w-max-[80%] text-base text-gray-500 mb-4 mx-auto'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
        <p className='mb-6 mx-auto'><Link href='#' underline='none' className='hover:!text-slate-700 transition-all duration-100 ease-in '>Varsity <ArrowForwardIcon /></Link></p>
        <p className='w-max-[80%] text-base text-wrap  mb-2 text-gray-500  mx-auto'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
        <p className='mx-auto'><Link href='#' underline='none' className='hover:!text-slate-700 transition-all duration-100 ease-in'>TradingQ&A <ArrowForwardIcon /></Link></p>
      </div>
    </div>
  )
}
