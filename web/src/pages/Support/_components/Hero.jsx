import React from 'react'
import BlueButton from '../../../components/BlueButton.jsx';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


export default function Hero() {
  return (
    <div className='max-w-5xl mx-auto px-4 md:px-auto'>
      <section className='flex justify-between items-center mb-10'>
        <h1 className='text-2xl md:text-3xl font-semibold  text-black'>Support Portal</h1>
        <BlueButton text='My Tickets' />
      </section>
      <TextField
        sx={{
          // Target the root of the outlined input
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#fff',
            borderRadius: '8px',
            transition: 'box-shadow 0.3s ease', 
            '& fieldset': {
              border: '1px solid #e1e1e1',
            },
            '&hover: fieldset':{
              borderColor:'#ccc',
            },
            '&.Mui-focused': {
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
              '& fieldset':{
                borderColor:'transparent',
                borderWidth:'1px',
              },
            },
          },
        }}
        placeholder="Eg.How do i open my account"
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        variant="outlined"
      />
    </div>
  )
}
