import React from 'react'
import Logo from '../assets/tiktik-logo.png'
import { Link } from 'react-router-dom'
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { createOrGetUser } from '../hooks/createOrGetUser';
import { IoMdAdd } from 'react-icons/io'
import { AiOutlineLogout } from 'react-icons/ai';

const NavBar = () => {
  const user = false;
  return (   
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link to={'/'}>
        <div className='w-[100px] md:w-[129px]'>
          <img className='cursor-pointer' src={Logo} alt="Tiktik" layout='responsive' />
        </div>
      </Link>
      <div className='border-solid rounded-xl border-4 border-gray-200 w-[200px]' >
        <input type="text"  placeholder='SEARCH' />
        </div>  
      <div>
        {user ? (
          <div>Logged In
          </div>
        ) : (
          <div className='flex gap-5 m:gap-10'>
         <Link to='Upload'>
            <button className='border-2 px-2 md:px-4 text-md flex items-center gap-2'>
              <IoMdAdd className='text-xl' /> {' '}
              <span className='hidden md:block'>
                Upload
              </span>
            </button>
          </Link>  
          <GoogleLogin 
          onSuccess={(response)=>(
            createOrGetUser(response)
          )}
          onError={()=> console.log('Error')}
          />
           <button
           type='button'
           className='px-2'
           onClick={() => {
            googleLogout();
           }}>
            <AiOutlineLogout color='red' fontSize={21}/>
           </button>  
          </div>
        )

        }
      </div>    
    </div>
  )
}

export default NavBar

