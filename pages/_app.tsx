import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";

import { NhostAuthProvider } from '@nhost/react-auth';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { nhost } from '@/utils/nhost';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NhostAuthProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
         <Head>
          <meta name="cf-2fa-verify" content="tgDWriVhnJkrhWBJkvX63g23JHiv6N" />
         </Head>
        <Component {...pageProps} />
      </NhostApolloProvider>
    </NhostAuthProvider>
  );
}

export default MyApp;
