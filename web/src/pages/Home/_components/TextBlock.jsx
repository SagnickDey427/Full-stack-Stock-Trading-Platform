import React from 'react'

export default function TextBlock({ heading, content }) {
    return (
        <div>
            <h2 className='text-lg md:text-2xl mb-3 text-slate-600 font-medium'>{heading}</h2>
            <p className='text-base/7  mb-6 text-gray-500'>{content}</p>
        </div>
    )
}
