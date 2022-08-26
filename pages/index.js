import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Get Started Here!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Masterclass!" />
        <p className="description">
          Including Bassix, Paul, and Rayzur <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
