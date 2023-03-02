import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const updateCount = async () => {
    try {
      const url = `/api/count`;
      await fetch(url, {
        method: 'POST',
        body: ``,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateCount();
  }, []);
  return <Component {...pageProps} />
}
