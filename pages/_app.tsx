import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Nav } from '../components/Nav'

const MyApp = ({ Component, pageProps } : AppProps) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen md:h-screen overflow-hidden">
      <header className="p-2 w-full md:w-64 md:h-full">
        <Nav />
      </header>
      <main className="w-full md:h-full md:flex">
        <Component {...pageProps} />
      </main>
      <footer className="p-2 w-full md:w-64 md:h-full">

      </footer>
    </div>
  )
}

export default MyApp