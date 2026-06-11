import React from 'react';
import zerodhaFundHouse from '../../../assets/zerodhaFundhouse.png';
import smallCase from '../../../assets/smallcaseLogo.png';
import streakLogo from '../../../assets/streakLogo.png';
import sensibullLogo from '../../../assets/sensibullLogo.svg';
import dittoLogo from '../../../assets/dittoLogo.png';
import goldenPiLogo from '../../../assets/goldenpiLogo.png';
import TextLogo from './TextLogo';

const universeList =[
  {
    image:zerodhaFundHouse,
    alt:"Zerodha Fund house img",
    text:["Our asset management venture","that is creating simple and transparent index","funds to help you save for your goals."]
  },
  {
    image:sensibullLogo,
    alt:"sensibull img",
    text:["Options trading platform that lets you","create strategies, analyze positions, and examine","data points like open interest, FII/DII, and more."]
  },
  {
    image:goldenPiLogo,
    alt:"Golden Pi img",
    text:["Investment research platform","that offers detailed insights on stocks,","sectors, supply chains, and more."]
  },
  {
    image:streakLogo,
    alt:"Streak img",
    text:["Systematic trading platform","that allows you to create and backtest","strategies without coding."]
  },
  {
    image:smallCase,
    alt:"Smallcase img",
    text:["Thematic investing platform","that helps you invest in diversified","baskets of stocks on ETFs."]
  },
  {
    image:dittoLogo,
    alt:"Ditto img",
    text:["Personalized advice on life","and health insurance. No spam","and no mis-selling."]
  },
]

export default function Universe() {
  return (
    <div className='py-20 px-4 md:px-8 text-center max-w-6xl mx-auto'>
      <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">The Zerodha Universe</h2>
      <p className="text-[1.1rem] text-slate-600 mb-16">Extend your trading and investment experience even further with our partner platforms</p>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto'>
        {universeList.map((item,index)=>{
          return (
            <TextLogo key={index} image={item.image} alt={item.alt} text={item.text}/>
          )
        })}
      </section>
    </div>
  )
}
