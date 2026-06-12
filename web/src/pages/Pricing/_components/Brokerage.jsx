import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const accounts = [
  {
    account:"Individual account",
    charge:"Free"
  },
  {
    account:"Minor account",
    charge:"Free"
  },
  {
    account:"NRI account",
    charge:"₹ 500"
  },
  {
    account:"HUF account",
    charge:"Free (online) / ₹ 500 (offline)"
  },
  {
    account:"Partnership, LLP, and Corporate accounts (offline only)",
    charge:"₹ 500"
  }
];

const services = [
  {
    service:"Tickertape",
    billing:"Monthly / Quarterly / Annual",
    charges:"Free: ₹0 | Pro: ₹ 249/699/2399"
  },
  {
    service:"Smallcase",
    billing:"Per transaction",
    charges:"Buy & Invest More: ₹ 100 | SIP: ₹ 10"
  },
  {
    service:"Kite Connect",
    billing:"Monthly",
    charges:"Connect: ₹ 500 | Personal: Free"
  },
]


export default function Brokerage() {
  return (
    <div className='mb-20'>
      <section className='mb-20'>
        <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-6">Charges for account opening</h2>
        <TableContainer elevation={0} component={Paper}>
          <Table className='border border-zinc-200 min-w-[650px] rounded-lg' aria-label="simple table">
            <TableHead className='bg-slate-50 font-medium'>
              <TableRow>
                <TableCell>Type of account</TableCell>
                <TableCell align="right">Charges</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map((row,index) => (
                <TableRow
                  key={index}
                  className='odd:bg-zinc-100 even:bg-white last:border-none'
                >
                  <TableCell component="th" scope="row">
                    {row.account}
                  </TableCell>
                  <TableCell align="right">{row.charge}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
      <section>
        <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-6">Charges for optional value added services</h2>
        <TableContainer elevation={0} component={Paper}>
          <Table className='border border-zinc-200 min-w-[650px]' aria-label="simple table rounded-lg">
            <TableHead className='bg-slate-50 font-medium'>
              <TableRow>
                <TableCell>Service</TableCell>
                <TableCell>Billing Frequency</TableCell>
                <TableCell align="right">Charges</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((row,index) => (
                <TableRow
                  key={index}
                  className='odd:bg-zinc-100 even:bg-white last:border-none'
                >
                  <TableCell component="th" scope="row">
                    {row.service}
                  </TableCell>
                  <TableCell>{row.billing}</TableCell>
                  <TableCell align="right">{row.charges}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </div>
  )
}
