import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from '@mui/material/Link';
import PricingImgBox from './Pricing_imgBox';
import ZeroImg from '../../../assets/pricingMF.svg';
import TwentyImg from '../../../assets/intradayTrades.svg';

export default function Pricing() {
  return (
    <div className='flex flex-col md:flex-row justify-between max-w-[90%] lg:max-w-[1100px] gap-4 mx-auto px-auto mb-12'>
      <div>
        <h1 className='text-2xl md:text-3xl text-slate-700 font-semibold  mb-4'>Unbeatable pricing</h1>
        <p className='text-gray-500 mb-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        <p><Link href='#' underline="none" className='hover:!text-slate-700 transition-all duration-100 ease-in'>See Pricing <ArrowForwardIcon /></Link></p>
      </div>
      <div className='flex flex-row gap-3'>
        <PricingImgBox image={ZeroImg} line1='Free account' line2='opening'/>
        <PricingImgBox image={ZeroImg} line1='Free equity delivery' line2='and direct mutual funds'/>
        <PricingImgBox image={TwentyImg} line1='Intraday and' line2='F&O'/>
      </div>
    </div>
  )
}
