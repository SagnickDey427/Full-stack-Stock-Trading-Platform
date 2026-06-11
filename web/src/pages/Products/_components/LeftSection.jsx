import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GooglePlay from '../../../assets/googlePlayBadge.svg';
import AppStore from '../../../assets/appstoreBadge.svg';

export default function LeftSection({ image, heading, content, links = [] }) {
  return (
    // Added px-4 for mobile padding, md:px-8 for desktop
    // Kept items-start, but changed gap to a standard gap-8
    <div className='px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start'>
      
      {/* Adjusted column sizing slightly for a better visual balance */}
      <figure className='md:col-span-6'>
        {/* Added w-full so the image respects the grid column width, and a dynamic alt tag */}
        <img src={image} alt={heading || "Section illustration"} className="w-full h-auto object-cover" />
      </figure>

      {/* Starts at column 8, spanning 5 columns (leaves 1 column gap in the middle) */}
      <section className='md:col-span-5 md:col-start-8 flex flex-col justify-center'>
        <h2 className="text-3xl font-medium text-slate-800">{heading}</h2>
        
        <article className='space-y-6 text-[1.1rem] leading-relaxed md:pt-4 text-slate-600'>
          <p className='pt-2'>{content}</p>
          
          {/* Grouped links in a flex container so they wrap nicely if there are multiple */}
          <div className="flex flex-wrap gap-5 pt-2">
            {links?.map((link,index) => {
              return (
                <a 
                  key={index} 
                  href={link.href}
                  // inline-flex perfectly aligns the text and the icon
                  className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {link.text} <ArrowForwardIcon fontSize="small" />
                </a>
              )
            })}
          </div>
        </article>
        <figure className='pt-4 flex justify-start items-center gap-4 [&>img]:max-w-[121px]'>
          <img src={GooglePlay} alt="Google Play"/>
          <img src={AppStore} alt="App Store"/>
        </figure>
      </section>
      
    </div>
  )
}