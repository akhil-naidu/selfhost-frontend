import React from 'react';

// Todo => replace and separate the svg files to another public directory
const Features = () => {
  return (
    <div>
      <section className='bg-gray-100 dark:bg-gray-900'>
        <div className='container mx-auto px-6 py-10'>
          <h1 className='text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl'>
            explore our <br /> awesome <span className='text-blue-600'>Features</span>
          </h1>

          <div className='mx-auto mt-6 flex justify-center'>
            <span className='inline-block h-1 w-40 rounded-full bg-blue-600'></span>
            <span className='mx-1 inline-block h-1 w-3 rounded-full bg-blue-600'></span>
            <span className='inline-block h-1 w-1 rounded-full bg-blue-600'></span>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16'>
            <div className='flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800'>
              <span className='inline-block rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-600 dark:text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                  />
                </svg>
              </span>

              <h1 className='text-2xl font-semibold capitalize text-gray-700 dark:text-white'>
                Advanced Runtime
              </h1>

              <p className='text-gray-500 dark:text-gray-300'>
                Your apps run inside smart containers in a fully managed runtime environment, we
                handle everything critical for production
              </p>

              <a
                href='#'
                className='-mx-1 flex transform items-center text-sm capitalize text-blue-600 transition-colors duration-200 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-600'
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

            <div className='flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800'>
              <span className='inline-block rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-600 dark:text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                  />
                </svg>
              </span>

              <h1 className='text-2xl font-semibold capitalize text-gray-700 dark:text-white'>
                Github Integration
              </h1>

              <p className='text-gray-500 dark:text-gray-300'>
                Our seamless GitHub integration means every push to the main branch will auto deploy
                your code with zero downtime
              </p>

              <a
                href='#'
                className='-mx-1 flex transform items-center text-sm capitalize text-blue-600 transition-colors duration-200 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-600'
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

            <div className='flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800'>
              <span className='inline-block rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-600 dark:text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                  />
                </svg>
              </span>

              <h1 className='text-2xl font-semibold capitalize text-gray-700 dark:text-white'>
                Multiple Language and DB
              </h1>

              <p className='text-gray-500 dark:text-gray-300'>
                Build your apps with languages like JS, Go, Ruby, Python, Java and link it with db
                like Postgres, MySQL, Mongo, or Redis
              </p>

              <a
                href='#'
                className='-mx-1 flex transform items-center text-sm capitalize text-blue-600 transition-colors duration-200 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-600'
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
