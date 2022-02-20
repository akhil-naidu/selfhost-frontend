import React, { useState } from 'react';
import Link from 'next/link';
import { useNhostAuth } from '@nhost/react-auth';
import { nhost } from '@/utils/nhost';

const DashboardHeader = () => {
  const { isAuthenticated } = useNhostAuth();
  const [mobileMenuClose, setMobileMenuClose] = useState(true);
  const toggleMobileMenu = () => setMobileMenuClose(!mobileMenuClose);

  const handleLogout = () => {
    nhost.auth.signOut();
  };

  return (
    <nav className='bg-white shadow dark:bg-gray-800'>
      <div className='container mx-auto px-6 py-3'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'></div>

            {/* <!-- Mobile menu button --> */}
            <div className='flex md:hidden'>
              <button
                type='button'
                className='text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400'
                aria-label='toggle menu'
                onClick={toggleMobileMenu}
              >
                <svg viewBox='0 0 24 24' className='h-6 w-6 fill-current'>
                  <path
                    fillRule='evenodd'
                    d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div className={(mobileMenuClose ? 'hidden' : 'block') + ' ' + 'md:block'}>
            <div className='mt-2 flex flex-col md:mx-1 md:mt-0 md:flex-row'>
              <Link href='/'>
                <a className='my-1 transform text-sm leading-5 text-gray-700 transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0'>
                  Home
                </a>
              </Link>
              <a
                className='my-1 transform text-sm leading-5 text-gray-700 transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0'
                href='#'
              >
                Blog
              </a>
              <a
                className='my-1 transform text-sm leading-5 text-gray-700 transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0'
                href='#'
              >
                Docs
              </a>
            </div>
          </div>
          <div className='-mx-1 flex items-center py-2 md:mx-0'>
            <button
              className='mx-1 block w-1/2 transform rounded-md bg-gray-500 px-3 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-200 hover:bg-blue-600 md:mx-2 md:w-auto'
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
