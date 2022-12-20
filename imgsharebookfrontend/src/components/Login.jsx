import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import ShareVideo from '../assets/assets/share.mp4';
import logo from '../assets/assets/logo.png';

const Login = () => {
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'><video src={ShareVideo}
        type="video/mp4" Loop controls={false} muted autoPlay className='w-full h-full object-cover'>
      </video>
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 '>
          <div className='p-5'>
           <h1>Image ShareBook</h1>
            <div className='shadow-2xl'>
              <GoogleLogin
                clientId=''
                render={(renderProps) => (
                  <button type='button'
                    className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none hover:opacity-80 transition duration-500 hover:scale-110'
                  >
                    <FcGoogle className='mr-4 ' /> Sign In with Google
                  </button>
                )}

              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login