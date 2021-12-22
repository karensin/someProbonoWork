import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from 'react-bootstrap';
import { NextPage } from 'next'
import NavBarComponent from './components/NavBar'
import Homepage from './Homepage';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Karen&apos; App</title>
        <meta name="description" content="Your new app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBarComponent />
        <Homepage />
      </main>
    </div>
  )
}

export default Home
