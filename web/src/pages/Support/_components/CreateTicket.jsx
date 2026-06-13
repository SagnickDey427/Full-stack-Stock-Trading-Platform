import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
import { Accordion_list ,NoticeBoard,QuickLinks} from '../../../data/SupportAssets.js';


export default function CreateTicket() {

  return (
    <div className='bg-white w-full'> 

    <section className='grid grid-cols-1 md:grid-cols-12 gap-4 max-w-5xl px-4 mt-5  mx-auto '>
      <main className='md:col-span-8 md:row-span-2 my-10 flex flex-col gap-4'>
        {/*Accordions*/}
        {Accordion_list.map((item, index) => {
          const Icon = item.emoji;
          return (
            <Accordion key={index} disableGutters elevation={0} sx={{ '&:before': { display: "none" } }} className='border border-gray-200 rounded-lg overflow-hidden'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id={`panel-${index}`}
                className='hover:bg-gray-100 transition-colors duration-200'
              >
                <div className='flex items-center'>
                  <span className='flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-full mr-4'>
                    <Icon fontSize="small" />
                  </span>
                  <span>{item.title}</span>
                </div>
              </AccordionSummary>
              <AccordionDetails className='border-t border-gray-100 bg-white'>
                <ul className='flex flex-col space-y-6 px-2 py-2'>
                  {item.content.map((liItem, liIndex) => {
                    return (
                      <li key={liIndex}><Link underline='none' className="text-gray-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-transform duration-200 text-sm" href={liItem.href}>{liItem.label}</Link></li>
                    )
                  })}
                </ul>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </main>

      {/* Notice Board */}
      <aside className='md:col-span-4 mt-10 bg-orange-50 border-l-2 border-orange-500 p-5 rounded-r-xl h-fit'>
        <ul className="flex flex-col space-y-3">
          {NoticeBoard.map((item, index) => {
            return (
              <li key={index} className=" text-sm leading-relaxed pb-3 border-b border-orange-200/60 last:border-0 last:pb-0 cursor-pointer"><a href={item.href} className=' text-gray-700 hover:text-blue-600'>{item.title}</a></li>
            )
          })}
        </ul>
      </aside>

      {/* Quick Links */}
      <aside className='md:col-span-4 bg-white border border-gray-200 h-fit overflow-hidden rounded-lg'>
        <h3 className='bg-gray-100 text-lg py-5 pl-2'>Quick Links</h3>
        <ul className='flex flex-col space-y-3'>
          {QuickLinks.map((item, index) => {
            return (
              <li key={index} className='border-b border-gray-200 last:border-0 leading-relaxed py-5 pl-2 hover:text-blue-600 cursor-pointer'><a href={item.href}>{item.title}</a></li>
            )
          })}
        </ul>
      </aside>
    </section>
    </div>
  )
}
