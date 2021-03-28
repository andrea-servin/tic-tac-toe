import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic-Tac-Toe App</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <main className={styles.main}>
        <h1>TIC-TAC-TOE</h1>
      </main>

      <footer className={styles.footer}>
        Made by <b>Andrea Servin</b>
      </footer>
    </div>
  )
}
