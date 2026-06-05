import React from 'react'
import Award from '../../../../public/assets/largestBroker.svg'
import PressLogos from '../../../../public/assets/pressLogos.png'

export default function Awards() {
  return (
    <div className='flex flex-col md:flex-row justify-between max-w-[90%] lg:max-w-[1100px] gap-4 mx-auto px-auto'>
      <div>
        <img src={Award} alt="Largest award"/>
      </div>
      <div className='mt-8'>
        <h1 className='text-2xl md:text-3xl font-semibold text-center mb-4'>Largest stock broker in India</h1>
        <p className='text-base text-center mb-4'>2+ million zerodha contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
        <div className='flex justify-between text-sm md:text-base mb-4' >
          <ul className='*:my-2 list-disc'>
            <li>Futures and Options</li>
            <li>Commodity derivatives</li>
            <li>Currency derivatives</li>
          </ul>
          <ul className='*:my-2 list-disc'>
            <li>Stocks & IPOs</li>
            <li>Direct mutual funds</li>
            <li>Bonds and Govt schemes</li>
          </ul>
        </div>
        <div>
          <img src={PressLogos} alt="Press Logos" />
        </div>
      </div>
    </div>
  )
}
