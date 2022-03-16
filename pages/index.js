import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';
import Brands from '../components/Brands/Brands';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Slider from '../components/Slider/Slider';

export default function Home() {
  const {data: session}= useSession();
 console.log(session);

  return (
    <div className="">
      <Head>
        <title>Disney+</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!session ? <Hero /> :(
        <main>
          <Slider />
          <Brands />
        </main>
      )}
  
      
    </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}