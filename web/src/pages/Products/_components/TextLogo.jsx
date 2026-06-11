import React from 'react'

export default function TextLogo({ image, alt, text }) {
    return (
        <figure className='flex flex-col items-center text-center max-w-2xl px-8 my-8'>
            <img src={image} alt={alt} className='h-12 w-auto object-contain'/>
            <figcaption className='mt-2'>
                {text?.map((item,index)=>{
                    return (
                        <p key={index} className='text-[0.75rem] text-slate-600 leading-relaxed font-medium'>{item}</p>
                    )
                })}
            </figcaption>
        </figure>
    )
}
