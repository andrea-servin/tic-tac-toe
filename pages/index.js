import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Game from '../components/Game'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic-Tac-Toe App</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <main className={styles.main}>
        <h1>TIC-TAC-TOE</h1>
        <Game />
      </main>

      <footer className={styles.footer}>
        Made by <b>Andrea Servin</b>
      </footer>
    </div>
  )
}
