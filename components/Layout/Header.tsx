import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className='bg-white shadow dark:bg-gray-800'>
      <div className='container mx-auto px-6 py-3'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <Link href='/'>
                <a className='transform text-2xl font-bold text-gray-800 transition-colors duration-200 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl'>
                  Selfhost
                </a>
              </Link>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className='flex md:hidden'>
              <button
                type='button'
                className='text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400'
                aria-label='toggle menu'
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
          <div className='items-center md:flex'>
            <div className='mt-2 flex flex-col md:mx-1 md:mt-0 md:flex-row'>
              <a
                className='my-1 transform text-sm leading-5 text-gray-700 transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0'
                href='#'
              >
                Home
              </a>
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
                Compoents
              </a>
              <a
                className='my-1 transform text-sm leading-5 text-gray-700 transition-colors duration-200 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0'
                href='#'
              >
                Courses
              </a>
            </div>

            <div className='-mx-1 flex items-center py-2 md:mx-0'>
              <Link href='/login'>
                <a className='mx-1 block w-1/2 transform rounded-md bg-gray-500 px-3 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-200 hover:bg-blue-600 md:mx-2 md:w-auto'>
                  Login
                </a>
              </Link>
              <a
                className='mx-1 block w-1/2 transform rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-200 hover:bg-blue-600 md:mx-0 md:w-auto'
                href='#'
              >
                Join free
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
