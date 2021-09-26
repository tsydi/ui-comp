import Link from 'next/link'

export const Nav = () => {
  return (
    <>
      <nav className="flex flex-col">
        <Link href="/"><a>Home</a></Link>
        <Link href="/components"><a>Components</a></Link>
        <Link href="/navigations"><a>Navigations</a></Link>
        <Link href="/footers"><a>Footers</a></Link>
      </nav>
    </>
  )
}