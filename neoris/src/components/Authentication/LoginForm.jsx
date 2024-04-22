import React from 'react'

import {Button} from '..'

function LoginForm() {
  return(
    <section className="h-full flex items-center justify-center dark:bg-main-dark-bg">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">

                {/* Columna Izquierda*/}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="w-48 mb-12 pb-1 "
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                    </div>

                    <form>
                      <p className="mb-10 text-3xl font-bold"><span>Get Started Now</span></p>
                      {/* <!--Username input--> */}
                      <label className='mb-3 mt-5 block text-gray-900'>
                        Username:
                      </label>
                      <input
                        className='peer block w-full rounded-md border border-gray-200 py-[9x] pl-2 text-md outline-2 placeholder:text-gray-500'
                        id="username"
                        type="text"
                        name='username'
                        placeholder='Enter Your Username'
                        required
                      />

                      {/* <!--Password input--> */}
                      <label className='mb-3 mt-5 block text-gray-900'>
                        Password:
                      </label>
                      <input
                        className='peer block w-full rounded-md border border-gray-200 py-[9x] pl-2 text-md outline-2 placeholder:text-gray-500'
                        id="password"
                        type="password"
                        name='password'
                        placeholder='Enter Your Password'
                        required
                      />

                      {/* <!--Submit button--> */}
                      <div className="mt-8 mb-12 pb-1 pt-1 text-center">
                        <LoginButton />
                        {/* <!--Forgot password link--> */}
                        <a href="#!">Forgot password?</a>
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                          <Button>
                            Register
                          </Button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className=" hidden lg:flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none md:none"
                  style={{
                    backgroundImage: "url(./Neoris.png)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LoginButton(){
  return(
    <Button className='my-4 w-full'>
      Log in
    </Button>
  )
}

export default LoginForm
