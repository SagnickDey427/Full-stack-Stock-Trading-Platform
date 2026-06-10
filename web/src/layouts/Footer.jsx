import React from 'react';
import ZerodhaLogo from '../assets/logo.svg';
import {
  X as XIcon,
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  WhatsApp as WhatsAppIcon,
  Telegram as TelegramIcon
} from '@mui/icons-material';
import GooglePlay from '../assets/googlePlayBadge.svg';
import AppStore from '../assets/appstoreBadge.svg';
import Link from '@mui/material/Link';


const FOOTER_SECTIONS = [
  {
    title: 'Account',
    links: [
      { text: 'Open demat account', href: '/open-account' },
      { text: 'Minor demat account', href: '/minor-account' },
      { text: 'NRI demat account', href: '/nri-account' },
      { text: 'HUF demat account', href: '/huf-account' },
      { text: 'Commodity', href: '/commodity' },
      { text: 'Dematerialisation', href: '/demat' },
      { text: 'Fund transfer', href: '/fund-transfer' },
      { text: 'MTF', href: '/mtf' },
    ],
  },
  {
    title: 'Support',
    links: [
      { text: 'Contact us', href: '/contact' },
      { text: 'Support portal', href: '/support' },
      { text: 'How to file a complaint?', href: '/complaint-howto' },
      { text: 'Status of your complaints', href: '/complaint-status' },
      { text: 'Bulletin', href: '/bulletin' },
      { text: 'Circular', href: '/circular' },
      { text: 'Z-Connect blog', href: '/blog' },
      { text: 'Downloads', href: '/downloads' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About', href: '/about' },
      { text: 'Philosophy', href: '/philosophy' },
      { text: 'Press & Media', href: '/press' },
      { text: 'Careers', href: '/careers' },
      { text: 'Zerodha cares CSR', href: '/csr' },
      { text: 'Zerodha.tech', href: '/tech' },
      { text: 'Open source', href: '/open-source' },
      { text: 'Referral program', href: '/referral' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className='mx-auto border-t border-gray-500 pt-6 lg:max-w-[90%] px-auto'>
      <div className='grid grid-cols-1 md:grid-cols-4 ml-4 gap-4'>
        <div className='flex flex-col gap-6 '>
          <img src={ZerodhaLogo} alt='Zerodha' className='w-[140px]' />
          <p>© 2010 - 2026, Zerodha Broking Ltd.</p>
          <p>All rights reserved.</p>
          <div className='flex flex-row gap-3 border-b border-slate-300 w-[50%]'>
            <XIcon />
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
          <div className='flex flex-row gap-3'>
            <YouTubeIcon />
            <WhatsAppIcon />
            <TelegramIcon />
          </div>
          <div className='flex gap-4'>
            <img src={GooglePlay} alt="" className='w-[121px]' />
            <img src={AppStore} alt="" className='w-[121px]' />
          </div>
        </div>
        {FOOTER_SECTIONS.map((footerCol) => {
          return (
            <div className='flex flex-col gap-2 text-slate-700'>
              <p className='text-lg mb-4 font-medium'>{footerCol.title}</p>
              {footerCol.links.map((link) => {
                return (
                  <ul>
                    <li className='mb-3'><Link color='inherit' underline='none' href={link.href}>{link.text}</Link></li>
                  </ul>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className='text-slate-700 mt-10 leading-relaxed'>
        <section className="space-y-2">
          <p>
            <strong>Zerodha Broking Ltd.:</strong> Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
          </p>
          <p>
            <strong>Registered Address:</strong> Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            For any complaints pertaining to securities broking please write to{' '}
            <a href="#" className="text-blue-600 hover:underline">complaints@zerodha.com</a>
            , for DP related to{' '}
            <a href="#" className="text-blue-600 hover:underline">dp@zerodha.com</a>.
            Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
        </section>
        <section className="space-y-2">
          <p className="font-semibold">Procedure to file a complaint on SEBI SCORES:</p>
          <p>Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.</p>
          <p><strong className="text-slate-600">Benefits:</strong> Effective Communication, Speedy redressal of the grievances</p>
          <div className="flex flex-wrap gap-4 pt-1 font-medium">
            <a href="#" className="text-blue-600 hover:underline">Smart Online Dispute Resolution</a>
            <span className="text-slate-300">|</span>
            <a href="#" className="text-blue-600 hover:underline">Grievances Redressal Mechanism</a>
          </div>
        </section>
        <p className="pl-3 py-0.5">
          Investments in securities market are subject to market risks; read all the related documents carefully before investing.
        </p>
        <section className="space-y-2">
          <p className="font-semibold">Attention investors:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020.</li>
            <li>Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge.</li>
            <li>Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</li>
          </ol>
        </section>
        <section className="space-y-3 pt-2 border-t border-slate-200">
          <p>
            India's largest broker based on networth as per NSE.{' '}
            <a href="#" className="text-blue-600 hover:underline">NSE broker factsheet</a>
          </p>
          <blockquote className="italic bg-slate-100 p-3 rounded border-l-4 border-slate-300">
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary."
          </blockquote>
          <p>
            Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account.
          </p>
          <p>
            As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please{' '}
            <a href="#" className="text-blue-600 hover:underline">create a ticket here</a>.
          </p>
        </section>
        <section className="text-[11px] text-slate-400 space-y-2 pt-2 border-t border-slate-200">
          <p>
            *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
          </p>
          <p>
            Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
          </p>
        </section>
      </div>
    </footer>
  )
}
