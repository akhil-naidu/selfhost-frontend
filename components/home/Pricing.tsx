import React from 'react';

const Pricing = () => {
  return (
    <div>
      <div className='bg-gray-100 dark:bg-gray-900'>
        <div className='container mx-auto px-6 py-8'>
          <div className='xl:-mx-8 xl:flex xl:items-center'>
            <div className='flex flex-col items-center xl:mx-8 xl:items-start'>
              <h1 className='text-3xl font-medium capitalize text-gray-800 dark:text-white lg:text-4xl'>
                Our Pricing Plan
              </h1>

              <div className='mt-4'>
                <span className='inline-block h-1 w-40 rounded-full bg-blue-500'></span>
                <span className='mx-1 inline-block h-1 w-3 rounded-full bg-blue-500'></span>
                <span className='inline-block h-1 w-1 rounded-full bg-blue-500'></span>
              </div>

              <p className='mt-4 font-medium text-gray-500 dark:text-gray-300'>
                You can get All Access by selecting your plan!
              </p>

              <a
                href='#'
                className='-mx-1 mt-4 flex items-center text-sm capitalize text-gray-700 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500'
              >
                <span className='mx-1'>read more</span>
                <svg
                  className='mx-1 h-4 w-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
            </div>

            <div className='flex-1 xl:mx-8'>
              <div className='mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0'>
                <div className='mx-auto max-w-sm rounded-lg border bg-white dark:border-gray-700 dark:bg-gray-800 md:mx-4'>
                  <div className='p-6'>
                    <h1 className='text-xl font-medium capitalize text-gray-700 dark:text-white lg:text-3xl'>
                      Essential
                    </h1>

                    <p className='mt-4 text-gray-500 dark:text-gray-300'>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
                      voluptatibus
                    </p>

                    <h2 className='mt-4 text-2xl font-medium text-gray-700 dark:text-gray-300 sm:text-4xl'>
                      $50.00 <span className='text-base font-medium'>/Month</span>
                    </h2>

                    <p className='mt-1 text-gray-500 dark:text-gray-300'>Yearly payment</p>

                    <button className='mt-6 w-full transform rounded-md bg-blue-600 px-4 py-2 capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
                      Start Now
                    </button>
                  </div>

                  <hr className='border-gray-200 dark:border-gray-700' />

                  <div className='p-6'>
                    <h1 className='text-lg font-medium capitalize text-gray-700 dark:text-white lg:text-xl'>
                      What’s included:
                    </h1>

                    <div className='mt-8 space-y-4'>
                      <div className='flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-blue-500'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>

                        <span className='mx-4 text-gray-700 dark:text-gray-300'>
                          All limited links
                        </span>
                      </div>

                      <div className='flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-blue-500'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>

                        <span className='mx-4 text-gray-700 dark:text-gray-300'>
                          Own analytics platform
                        </span>
                      </div>

                      <div className='flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-blue-500'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>

                        <span className='mx-4 text-gray-700 dark:text-gray-300'>Chat support</span>
                      </div>

                      <div className='flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-blue-500'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>

                        <span className='mx-4 text-gray-700 dark:text-gray-300'>
                          Optimize hashtags
                        </span>
                      </div>

                      <div className='flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-red-400'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z'
                            clipRule='evenodd'
                          />
                        </svg>

                        <span className='mx-4 text-gray-700 dark:text-gray-300'>Mobile app</span>
                      </div>

                      <div className='flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-red-400'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z'
                            clipRule='evenodd'
                          />
                        </svg>

                        <span className='mx-4 text-gray-700 dark:text-gray-300'>
                          Unlimited users
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mx-auto max-w-sm rounded-lg border bg-white dark:border-gray-700 dark:bg-gray-800 md:mx-4'>
                  <div className='p-6'>
                    <h1 className='text-xl font-medium capitalize text-gray-700 dark:text-white lg:text-3xl'>
                      Premium
                    </h1>

                    <p className='mt-4 text-gray-500 dark:text-gray-300'>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
                      voluptatibus
                    </p>

                    <h2 className='mt-4 text-2xl font-medium text-gray-700 dark:text-gray-300 sm:text-4xl'>
                      $500.00 <span className='text-base font-medium'>/life time</span>
                    </h2>

                    <p className='mt-1 text-gray-500 dark:text-gray-300'>One time payment</p>

                    <button className='mt-6 w-full transform rounded-md bg-blue-600 px-4 py-2 capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
                      Start Now
                    </button>
                  </div>

                  <hr className='border-gray-200 dark:border-gray-700' />

                  <div className='p-6'>
                    <h1 className='text-lg font-medium capitalize text-gray-700 dark:text-white lg:text-xl'>
                      What’s included:
                    </h1>

                    <div className='mt-8 space-y-4'>
                      <div className='flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-blue-500'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>

                        <span className='mx-4 text-gray-700 dark:text-gray-300'>
                          All limited links
                        </span>
                      </div>

                      <div className='flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-blue-500'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>

                        <span className='mx-4 text-gray-700 dark:text-gray-300'>
                          Own analytics platform
                        </span>
                      </div>

                      <div className='flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-blue-500'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>

                        <span className='mx-4 text-gray-700 dark:text-gray-300'>Chat support</span>
                      </div>

                      <div className='flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-blue-500'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>

                        <span className='mx-4 text-gray-700 dark:text-gray-300'>
                          Optimize hashtags
                        </span>
                      </div>

                      <div className='flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-blue-500'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>

                        <span className='mx-4 text-gray-700 dark:text-gray-300'>Mobile app</span>
                      </div>

                      <div className='flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-blue-500'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>

                        <span className='mx-4 text-gray-700 dark:text-gray-300'>
                          Unlimited users
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
