import Head from 'next/head'

interface ILayout {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords: string;
}

export const Layout = ({ children, title, description, keywords } : ILayout) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}