import React from 'react';

const Hero = () => {
  return (
    <section className='bg-white dark:bg-gray-800'>
      <div className='container mx-auto px-6 py-16 text-center'>
        <div className='mx-auto max-w-3xl'>
          <h1 className='text-3xl font-bold text-gray-800 dark:text-white md:text-6xl'>
            Selfhost <span className='text-blue-500'>Open Source</span> projects with Confidence.
          </h1>

          <p className='mt-6 text-gray-500 dark:text-gray-300'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati
            illum mollitia.
          </p>

          <div className='mx-auto mt-6 w-full max-w-sm rounded-md border bg-transparent focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:border-gray-700 dark:focus-within:border-blue-300'>
            <form className='flex flex-col md:flex-row'>
              <input
                type='email'
                placeholder='Enter your email address'
                className='m-1 h-10 flex-1 appearance-none border-none bg-transparent px-4 py-2 text-gray-700 placeholder-gray-400 focus:placeholder-transparent focus:outline-none focus:ring-0 dark:text-gray-200'
              />

              <button
                type='button'
                className='m-1 h-10 transform rounded-md bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none'
              >
                Join Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
