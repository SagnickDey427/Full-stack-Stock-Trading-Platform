import React from 'react';
import EcoSystem from '../../../../public/assets/ecosystem.png';
import TextBlock from './TextBlock';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from '@mui/material/Link';

export default function Stats() {
  return (
    <div className='flex flex-col md:flex-row justify-betwen items-center max-w-[90%] lg:max-w-[1100px] gap-4 mx-auto px-auto'>
      <div className='lg:max-w-[35%]'>
        <h1 className='text-xl md:text-3xl text-slate-700 mb-8 font-semibold'>Trust with confidence</h1>
        <TextBlock heading='Customer-first always' content="That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India." />
        <TextBlock heading='No spam or gimmicks' content="No gimmicks, spam, 'gamification', or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies." />
        <TextBlock heading='The Zerodha universe' content="Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs." />
        <TextBlock heading='Do better with money' content="With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money." />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div><img src={EcoSystem} alt="Ecosystem" /></div>
        <div className='flex flex-row justify-around items-center gap-4'>
          <p><Link href='http://localhost:5173/products' underline="none" className='hover:!text-slate-700 transition-all duration-100 ease-in'>Explore our Products<ArrowForwardIcon /></Link></p>
          <p><Link href='http://localhost:5173/products' underline="none" className='hover:!text-slate-700 transition-all duration-100 ease-in'>Try Kite<ArrowForwardIcon /></Link></p>
        </div>

      </div>
    </div>
  )
}
