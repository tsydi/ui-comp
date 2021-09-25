import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center w-screen min-h-screen md:h-screen overflow-hidden">
      <header className="p-1 w-full md:w-48 h-12 md:h-screen flex flex-col items-center justify-center">
        <h1></h1>
      </header>

      <main className="w-full h-screen flex">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>

      <footer className="p-1 w-full md:w-64 h-24 md:h-screen flex flex-col items-center justify-center">

      </footer>
    </div>
  )
}

export default MyApp