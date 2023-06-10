import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Hero, Services, About } from '../section'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Acher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Services/>
      <About/>
    </div>
  )
}

export default Home