import React from 'react'
import Hero from './_components/Hero.jsx'
import CreateTicket from './_components/CreateTicket.jsx'

export default function SupportPage() {
  return (
    <div className='bg-zinc-100 pt-10 mb-10'>
      <Hero/>
      <CreateTicket/>
    </div>
  )
}
