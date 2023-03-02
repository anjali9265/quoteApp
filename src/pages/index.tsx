import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../pages/navbar'
import { useEffect, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [quote, setQuote] = useState<any | null>(null);
  const [count, setCount] = useState<number>(0);

  async function fetchQuote() {
    const res = await fetch("https://api.chucknorris.io/jokes/random").then((res) => res.json())
      .then((data) => {
        if (!data) {
          throw new Error('Failed to fetch data');
        }
        setQuote(data.value)
      })
  }

  async function getCount() {
    try {
      const url = `/api/count`;
      await fetch(url).then((res) => res.json())
        .then((data) => {
          if (!data) {
            throw new Error('Failed to fetch data');
          }
          setCount(data.visitCount)
        })
    } catch (error) {
      console.error(error);
    }
  }
  const handleClick = () => {
    fetchQuote();
  }
  useEffect(() => {
    getCount();
    fetchQuote();
  }, [0]);


  useEffect(() => {
    getCount();
  }, []);


  return (
    <>
      <Head>
        <title>Quote App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.navbar}>
          <Navbar />
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/image.jpg"
            alt="Next.js Logo"
            width={500}
            height={100}
            quality={100}
          />
          <div >
            <div className={styles.quote}>
              {quote}
            </div>
            <button className={styles.button} onClick={handleClick}>Change Quote</button>
          </div>
        </div>
        <div className={styles.grid}>

          <div className={styles.card}>
            <h2 className={inter.className}>
              Visit Count <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              {count}
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
