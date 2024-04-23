import React from 'react';

const Signup = () => {
  return(
    <section className='min-h-screen flex items-center justify-center' style={{
      background: 'url(./Background.gif) no-repeat center center fixed',
      backgroundSize: 'cover'
    }}>
      <div class="bg-main-bg flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className='md:w-1/2 px-8 md:px-16'>
          <h2 className='font-bold text-2xl text-black'>
            Sign Up
          </h2>
          <form action="" className='flex flex-col gap-4'>
            <input className='p-2 mt-8 rounded-xl border' type='email' name='email' placeholder='Email' />
            <div className='relative'>
              <input className='p-2 rounded-xl border w-full' type='password' name='password' placeholder='Password' />
            </div>
            
            <input className='p-2 rounded-xl border w-full' type='password' name='confirmPassword' placeholder='Confirm Password' />
            
            <button className='bg-black rounded-xl text-white py-2'>Login</button>
          </form>

          <div className='mt-5 text-xs border-b border-black py-4 text-black'>
            <p className='mt-4'>Already have an account? <a href='./Login' className='text-blue-500'>Login</a></p>
          </div>
        </div>

          <div className='md:block hidden w-1/2'>
            <img className='rounded-2xl' src='./Neoris.png'/>
          </div>

      </div>
    </section>
  )
};

export default Signup