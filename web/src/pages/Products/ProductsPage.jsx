import React from 'react'
import Hero from './_components/Hero.jsx';
import LeftSection from './_components/LeftSection.jsx';
import RightSection from './_components/RightSection.jsx';
import Universe from './_components/Universe.jsx';
import coinImg from '../../assets/coin.png';
import kiteImg from '../../assets/kite.png';
import consoleImg from '../../assets/console.png';
import apiImg from '../../assets/kiteconnect.png';
import varsityImg from '../../assets/varsity.png';
import BlueButton from '../../components/BlueButton.jsx';

export default function ProductsPage() {
  return (
    <div className='flex flex-col gap-20 max-w-5xl px-auto mx-auto'>
      <Hero />
      {/* Kite section */}
      <LeftSection image={kiteImg} heading='Kite' content='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.' links={[{ text: "Try Demo", href: "#" }, { text: "Learn More", href: "#" }]} />
      {/* Console section */}
      <RightSection image={consoleImg} heading='Console' content='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.' links={[{ text: "Learn more", href: "#" }]} />
      {/* Coin section */}
      <LeftSection image={coinImg} heading='Coin' content='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.' links={[{ text: "Coin", href: "#" }]} />
      <RightSection image={apiImg} heading='Kite Connect API' content='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.' links={[{ text: "Kite connect", href: "#" }]} />
      <LeftSection image={varsityImg} heading='Varsity mobile' content='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.' />
      <p className='text-[25px] text-slate-600 text-[1.1rem] md:pt-4 text-center'>Want to know more about our tech stack? Follow <a className='text-blue-600 hover:text-black transition-colors mb-8' href='#' target='_blank'>Zerodha.tech</a> blog.</p>
      <Universe />
      <section className='max-w-2xl mx-auto px-auto mb-15'>
        <BlueButton />
      </section>
    </div>
  )
}
