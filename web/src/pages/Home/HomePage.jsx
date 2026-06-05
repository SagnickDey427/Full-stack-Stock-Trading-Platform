import React from 'react'
import Hero from './_components/Hero'
import Awards from './_components/Awards'
import Education from './_components/Education'
import Pricing from './_components/Pricing'
import Stats from './_components/Stats'
import OpenAccount from '../../components/OpenAccount'

export default function HomePage() {
  return (
    <div className='flex flex-col justify-center gap-8 items-center lg:max-w-[90%] px-auto mx-auto'>
        <Hero/>
        <Awards/>
        <Education/>
        <Pricing/>
        <Stats/>
        <OpenAccount/>
    </div>
  )
}
