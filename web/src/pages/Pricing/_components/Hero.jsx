import React from 'react'
import ImageCard from './ImageCard.jsx';
import zeroImg from '../../../assets/pricingMF.svg';
import twentyImg from '../../../assets/intradayTrades.svg';

export default function Hero() {
  return (
    <div className='mt-10'>
      <h1 className='text-2xl md:text-3xl font-semibold  text-black text-center mx-auto px-auto'>Charges</h1>
      <h2 className='text-lg md:text-xl  text-slate-400 text-center mb-40'>List of all charges and taxes</h2>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16'>
        <ImageCard image={zeroImg} title='Free equity delivery' content='All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.'/>
        <ImageCard image={twentyImg} title='Intraday and F&O trades' content='Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.'/>
        <ImageCard image={zeroImg} title='Free direct MF' content='All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.'/>
      </section>

    </div>
  )
}
