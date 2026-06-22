import React from 'react';
import HomeHero from '../../../assets/homeHero.png';
import BlueButton from '../../../components/BlueButton';

export default function Hero() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 py-12'>
      <img className='max-w-[90%] lg:max-w-[1100px]' src={HomeHero} alt="Home Hero" />
      <h2 className='text-2xl md:text-3xl text-slate-700 font-semibold text-center'>Invest in everything</h2>
      <p className='text-base md:text-xl text-slate-700 text-center'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      <BlueButton data-testid="hero-primary-cta"/>
    </div>
  )
}

