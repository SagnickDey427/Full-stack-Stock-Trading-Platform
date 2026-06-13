import React from 'react'

export default function BlueButton({text='Sign up for free'}) {
    return (
        <button className='bg-blue-500 px-5 py-2 hover:bg-black rounded-sm transition-all duration-300 ease-in-out'>
            <p className='text-white text-lg'>{text}</p>
        </button>
    )
}
