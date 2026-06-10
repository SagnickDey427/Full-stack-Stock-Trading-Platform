import { useState, useId } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import zerodhaLogo from "../assets/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

export default function Navbar() {
  const id = useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='py-8 flex flex-row justify-around items-center max-h-[40px] max-w-screen px-4 mb-10 border-b border-slate-300'>
      <div>
        <Link href='http://localhost:5173/'><img src={zerodhaLogo} alt="Zerodha" className='max-w-[110px]' /></Link >
      </div>
      <div>
        <ul className='hidden lg:block lg:flex flex-row justify-center gap-8'>
          <li><Link href='#' underline="none" className='hover:!text-slate-700 transition-all duration-100 ease-in'>Signup</Link></li>
          <li><Link underline="none" className='hover:!text-slate-700 transition-all duration-100 ease-in' href='http://localhost:5173/about'>About</Link ></li>
          <li><Link underline="none" className='hover:!text-slate-700 transition-all duration-100 ease-in' href='http://localhost:5173/pricing'>Pricing</Link ></li>
          <li><Link underline="none" className='hover:!text-slate-700 transition-all duration-100 ease-in' href='http://localhost:5173/products'>Products</Link ></li>
          <li><Link underline="none" className='hover:!text-slate-700 transition-all duration-100 ease-in' href='http://localhost:5173/support'>Support</Link ></li>
        </ul>
        <div className='lg:hidden'>
          <Button
            id={buttonId}
            aria-controls={open ? menuId : undefined}
            aria-haspopup="true"
            aria-expanded={open}
            onClick={handleClick}
          >
            <MenuIcon />
          </Button>
          <Menu
            id={menuId}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                'aria-labelledby': buttonId,
              },
            }}
          >
            <MenuItem onClick={handleClose}><Link href='http://localhost:5173/auth/signup' underline="none" className='hover:!text-slate-700 transition-all duration-100 ease-in'>Signup</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link underline="none" className='hover:!text-slate-700 transition-all duration-100 ease-in' href='http://localhost:5173/about'>About</Link ></MenuItem>
            <MenuItem onClick={handleClose}><Link underline="none" className='hover:!text-slate-700 transition-all duration-100 ease-in' href='http://localhost:5173/pricing'>Pricing</Link ></MenuItem>
            <MenuItem onClick={handleClose}><Link underline="none" className='hover:!text-slate-700 transition-all duration-100 ease-in' href='http://localhost:5173/products'>Products</Link ></MenuItem>
            <MenuItem onClick={handleClose}><Link underline="none" className='hover:!text-slate-700 transition-all duration-100 ease-in' href='http://localhost:5173/support'>Support</Link ></MenuItem>
          </Menu>

        </div>
      </div>

    </div>
  )
}
