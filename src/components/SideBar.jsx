import React, {useState} from 'react';
import {AiFillHome, AiOutlineMenu} from 'react-icons/ai';
import {ImCancelCircle} from 'react-icons/im';
import { useLocation, Link} from 'react-router-dom';
import {GoogleLogin} from '@react-oauth/google';
import Discover from './Discover';
import SuggestedAccounts from './SuggestedAccounts';
import Footer from './Footer';


const SideBar = ()=> {
  const [showSideBar, setShowSideBar] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname
  const userProfile = false;

  const activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded';

  const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded';

  return (
    <div>
      <div
        className='block xl:hidden m-2 ml-4 mt-3 text-xl'
        onClick={() => setShowSideBar(!showSideBar)}
      >
        {showSideBar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSideBar && (
        <div className='xl:w-80 mr-5 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3'>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link to='/'>
              <div className={currentPath === '/' ? activeLink : normalLink}>
                <p className='text-2xl'>
                  <AiFillHome />
                </p>
                <span className='capitalize text-xl hidden xl:block'>
                  For You
                </span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className='px-2 py-4 hidden xl:block'>
              <p className='text-gray-400'>
                Login to like and comment on videos
              </p>
              <div className='pr-4'>
              <GoogleLogin
              clientId=""
              render={renderProps => (
                <button 
                className='cursor-pointer bg-white text-lg text-[#F51997] border-[1px] border-[#F51997] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#F51997]'
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled}>
                  Login
                  </button>
              )}
              buttonText="Login"
              onSuccess={() => {}}
              onFailure={() => {}}
              cookiePolicy='single_host_origin'
              /> 
              </div>
            </div>
          )}

          <Discover />
          {/* <SuggestedAccounts
            // fetchAllUsers={fetchAllUsers}
            // allUsers={allUsers}
          /> */}
          <Footer />

        </div>
      )}
    </div>
  );
}

export default SideBar