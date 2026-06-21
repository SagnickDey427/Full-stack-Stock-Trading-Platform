import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';


export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    setIsLoading(true); // Lock the button

    try {
      const resp = await axios.post('http://localhost:3002/api/auth/signup', {
        username,
        email,
        password
      },{
        withCredentials:true
      });

      if (resp.data.success) {
        const searchParams = new URLSearchParams(window.location.search);
        const returnTo = searchParams.get('returnTo');

        if (returnTo) {
          window.location.replace(`http://localhost:3000${returnTo}`);
        } else {
          window.location.replace('http://localhost:3000/');
        }
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      // Always unlock the button, whether it succeeded or failed!
      setIsLoading(false);
    }
  }
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in">
      <div className="relative bg-white rounded-xl shadow-xl border border-gray-100 p-6 w-full max-w-md mx-4">
        <span className='flex justify-between items-center'>
          <h3 className="text-2xl font-bold mb-6">Sign Up</h3>
          <Link className='absolute top-4 right-4' to='http://localhost:5173/'><CloseIcon/></Link>
        </span>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-sm">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="username">Username</label>
          <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} className='border border-zinc-200'/>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-zinc-200'/>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-zinc-200' />
          <button
            type="submit"
            disabled={isLoading}
            className={`text-white py-2 rounded font-bold transition mt-4 
                    ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`
            }
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <p>Already have an account ? <Link to='http://localhost:5173/auth/login' className="text-blue-600 hover:underline">Login</Link></p>
      </div>
    </div>
  )
}
