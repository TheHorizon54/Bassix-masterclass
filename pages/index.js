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
          Including Bassix, Paul, and Rayzur
        </p>
      </main>
    <main>
      <p>
          This course includes Wonky Design by Paulls, Melodic Design by Rayur, and Banger Shi from Bassix Sonare
      </p>
      <Head
    </main>
      <Footer />
    </div>
  )
}
