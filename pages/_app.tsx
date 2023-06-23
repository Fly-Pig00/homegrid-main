import '../styles/globals.css';
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps}: AppProps ) {
  return (
      <Layout>
        <Component {...pageProps} />
        <Analytics/>
      </Layout>
  )
}

export default MyApp;