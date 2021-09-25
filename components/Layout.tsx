import Head from 'next/head'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      {children}
    </>
  )
}