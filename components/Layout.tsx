import React, { ReactNode } from 'react';
import Head from 'next/head';

import { Header, Footer } from './layout/index';

interface LayoutProps {
  headerContent?: {
    title: string;
    metaName: string;
    metaContent: string;
  };
  children: ReactNode;
}

// If Layout was not receiving any custom value, fallback to these as default
const defaultHeaderContent = {
  title: 'Selfhost',
  metaName: 'description',
  metaContent: 'Selfhost.dev allows you to selfhost your favorite open-source project',
};

const Layout = ({ headerContent = defaultHeaderContent, children }: LayoutProps) => {
  return (
    <div className='relative'>
      <Head>
        <title>{headerContent.title}</title>
        <meta name={headerContent.metaName} content={headerContent.metaContent} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
