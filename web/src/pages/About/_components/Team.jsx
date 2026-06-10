import React from 'react';
import NithinPhoto from '../../../assets/nithinKamath.jpg';

export default function Team() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-medium text-center text-slate-800 mb-16">
        People
      </h2>
      <article className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        <figure className="md:col-span-4 flex flex-col items-center text-center m-0">
          <img 
            src={NithinPhoto} 
            alt="Nithin Kamath, Founder and CEO of Zerodha" 
            className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover mb-4"
          />
          <figcaption>
            <h3 className="text-xl font-medium text-slate-800">Nithin Kamath</h3>
            <p className="text-slate-500 text-sm mt-1">Founder, CEO</p>
          </figcaption>
        </figure>
        <div className="md:col-span-8 space-y-6 text-slate-600 text-[1.1rem] leading-relaxed md:pt-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
          </p>
          <p className="pt-2">
            Connect on{' '}
            <a 
              href="https://nithinkamath.me/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-slate-900 transition-colors font-medium"
            >
              Homepage
            </a>{' '}
            /{' '}
            <a 
              href="https://tradingqna.com/u/nithin/summary" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-slate-900 transition-colors font-medium"
            >
              TradingQnA
            </a>{' '}
            /{' '}
            <a 
              href="https://x.com/Nithin0dha" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-slate-900 transition-colors font-medium"
            >
              Twitter
            </a>
          </p>
        </div>

      </article>
    </section>
  );
}