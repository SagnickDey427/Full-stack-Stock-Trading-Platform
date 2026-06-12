import React from 'react'

export default function ImageCard({image,title, content}) {
  return (
    <figure className='flex flex-col gap-4 max-w-5xl mb-30'>
        <img src={image} alt="title" className='h-[130px] object-contain w-auto'/>
        <figcaption>
            <h3 className="text-xl text-center font-medium text-slate-800 mb-3">{title}</h3>
            <p className='space-y-6 text-[1.1rem] text-center leading-relaxed md:pt-4 text-slate-600'>{content}</p>
        </figcaption>
    </figure>
  )
}
