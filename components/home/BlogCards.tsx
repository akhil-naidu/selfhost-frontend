import React from 'react';
import Image from 'next/image';

const content = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/leewardslope/image/upload/v1644030105/selfhost/5x162rg3h0qbof4o1x7c_f905aaf015.gif',
    title: 'Selfhosting Forem on Digital Ocean',
    excerpt: 'An intro guide on self-hosting Forem on your own digital ocean server.',
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/leewardslope/image/upload/v1643508553/selfhost/learn_tailwindcss_2263a75a7f.jpg',
    title: 'Step by Step tutorial on How to Install Forem',
    excerpt: 'A small blog post with a video guide',
  },
];

const BlogCards = () => {
  return (
    <div className='my-12'>
      <h1 className='text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl'>
        Checkout <br />
        our Latest <span className='text-blue-600'>Posts</span>
      </h1>

      <div className='mx-auto mt-6 flex justify-center'>
        <span className='inline-block h-1 w-40 rounded-full bg-blue-600'></span>
        <span className='mx-1 inline-block h-1 w-3 rounded-full bg-blue-600'></span>
        <span className='inline-block h-1 w-1 rounded-full bg-blue-600'></span>
      </div>

      <section className=' bg-white dark:bg-gray-900 lg:flex lg:justify-center lg:pt-12'>
        {content.map((blog) => (
          <div key={blog.id}>
            <div className='relative bg-gray-100 dark:bg-gray-800  lg:mx-8 lg:flex lg:max-w-2xl lg:rounded-lg lg:shadow-lg'>
              <div className='lg:w-1/2'>
                <div className='relative overflow-hidden object-center lg:h-full lg:w-full lg:rounded-l-lg'>
                  <Image src={blog.img} alt='' layout='fill' />
                </div>
              </div>

              <div className='max-w-xl px-6 lg:w-1/2 lg:max-w-5xl lg:p-4'>
                <h2 className='text-xl font-bold text-gray-800 dark:text-white md:text-xl'>
                  {blog.title}
                </h2>
                <p className=' text-gray-600 dark:text-gray-400'>{blog.excerpt}</p>

                <div className='mt-4'>
                  <a className='transform rounded-md bg-blue-600 px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 hover:bg-gray-500'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogCards;
