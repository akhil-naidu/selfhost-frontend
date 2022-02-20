import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useNhostAuth } from '@nhost/react-auth';
import Layout from '@/components/layout/Layout';
import { nhost } from '@/utils/nhost';
import Link from 'next/link';

const Login = () => {
  const headerContent = {
    title: 'Selfhost | Login',
    metaName: 'description',
    metaContent: 'Selfhost.dev allows you to selfhost your favorite open-source project',
  };

  // state variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // login verification
  const { isLoading, isAuthenticated } = useNhostAuth();
  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    router.push('/dashboard');
    return null;
  }

  //handle events
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submittedDetails = {
      email,
      password,
    };

    const { error } = await nhost.auth.signIn(submittedDetails);
    if (error) alert(error.message);
  };

  return (
    <Layout headerContent={headerContent}>
      <div className='bg-gray-100 dark:bg-gray-900'>
        <div className='flex h-screen justify-center'>
          <div className='m-auto  w-full max-w-sm rounded-md bg-white p-6 shadow-md dark:bg-gray-800'>
            <h1 className='text-center text-3xl font-semibold text-gray-700 dark:text-white'>
              Selfhost
            </h1>

            <form onSubmit={(e) => handleSubmit(e)} className='mt-6'>
              <div>
                <label htmlFor='email' className='block text-sm text-gray-800 dark:text-gray-200'>
                  email
                </label>
                <input
                  type='text'
                  value={email}
                  onChange={(e) => handleEmailChange(e)}
                  className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300'
                />
              </div>

              <div className='mt-4'>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='password'
                    className='block text-sm text-gray-800 dark:text-gray-200'
                  >
                    Password
                  </label>
                  <a href='#' className='text-xs text-gray-600 hover:underline dark:text-gray-400'>
                    Forget Password?
                  </a>
                </div>

                <input
                  type='password'
                  value={password}
                  onChange={(e) => handlePasswordChange(e)}
                  className='mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300'
                />
              </div>

              <div className='mt-6'>
                <button
                  type='submit'
                  className='w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'
                >
                  Login
                </button>
              </div>
            </form>

            <div className='mt-4 flex items-center justify-between'>
              <span className='w-1/5 border-b dark:border-gray-600 lg:w-1/5'></span>

              <a
                href='#'
                className='text-center text-xs uppercase text-gray-500 hover:underline dark:text-gray-400'
              >
                or login with Social Media
              </a>

              <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/5'></span>
            </div>

            <div className='-mx-2 mt-6 flex items-center'>
              <button
                type='button'
                className='mx-2 flex w-full transform items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none'
              >
                <svg
                  className='h-5 w-5 fill-current'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z'></path>
                </svg>

                <span className='mx-2 hidden sm:inline'>Sign in with Github</span>
              </button>

              <a
                href='#'
                className='mx-2 transform rounded-md bg-gray-300 p-2 text-sm font-medium text-gray-500 transition-colors duration-200 hover:bg-gray-200'
              >
                <svg className='h-5 w-5 fill-current' viewBox='0 0 24 24'>
                  <path d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z'></path>
                </svg>
              </a>
            </div>

            <p className='mt-8 text-center text-xs font-light text-gray-400'>
              Don’t have an account?
              <Link href='/signup'>
                <a className='font-medium text-gray-700 hover:underline dark:text-gray-200'>
                  {' '}
                  Create One
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
