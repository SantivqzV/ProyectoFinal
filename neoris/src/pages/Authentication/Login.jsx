import React, {useState } from 'react';
import { SignupPage } from '..';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import { login } from '../../auth';

const LoginPage = () => {
  const navigate = useNavigate();
  const {setIsAuth} = useStateContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    const success = await login(email, password);

    if (success) {
      setIsAuth(true);
      navigate('/dashboard');
    }
  }

  return(
    <section className='min-h-screen flex items-center justify-center' style={{
      background: 'url(./Background.gif) no-repeat center center fixed',
      backgroundSize: 'cover'
    }}>
      <div class="bg-main-bg flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className='md:w-1/2 px-8 md:px-16'>
          <h2 className='font-bold text-2xl text-black'>
            Login
          </h2>
          <form action="" className='flex flex-col gap-4' onSubmit={handleLogin}>
            <input 
              className='p-2 mt-8 rounded-xl border' 
              type='email' 
              name='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            <div className='relative'>
              <input 
                className='p-2 rounded-xl border w-full' 
                type='password' 
                name='password' 
                placeholder='Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className='bg-black rounded-xl text-white py-2' type="submit">Login</button>
          </form>

          <div className='mt-5 text-xs border-b border-black py-4 text-black'>
            <p className='mt-4'>Forgot your password? <a href='./ResetPassword' className='text-blue-500'>Reset Password</a></p>
          </div>

          <div class="mt-3 text-xs flex justify-between items-center text-black">
            <p>Don't have an account?</p>
            <button class="py-2 px-5 bg-white border rounded-xl " onClick={() => navigate('/Signup')}>Register</button>
          </div>
        </div>

          <div className='md:block hidden w-1/2'>
            <img className='rounded-2xl' src='./Neoris.png'/>
          </div>

      </div>
    </section>
  )
};

export default LoginPage