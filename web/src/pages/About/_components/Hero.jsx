import React from 'react'

export default function Hero() {
  return (
    <div className='px-6'>
      <div className=' border-b border-slate-300 [&>p]:text-black [&>p]:text-2xl [&>p]:font-semibold [&>p]:text-center py-20 mb-16'>
        <p >We pioneered the discount broking model in India.</p>
        <p>Now, we are breaking ground with our technology.</p>
      </div>
      <div className='space-y-6 text-slate-600 text-[1.1rem] leading-relaxed grid grid-cols-1 md:grid-cols-12'>
        <div className='md:col-span-5 md:col-end-6 [&>section]:mb-4'>
          <section>
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
          </section>
          <section>
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
          </section>
          <section>
            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
          </section>
        </div>
        <div className='md:col-span-5 md:col-end-13 [&>section]:mb-4'>
          <section>
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
          </section>
          <section>
            Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
          </section>
          <section>
            And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
          </section>
        </div>
      </div>
    </div>
  )
}
