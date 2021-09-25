import Link from 'next/link'

export const NavBar = () => {
  return (
    <nav className="py-4 px-3 text-sm w-full font-semibold rounded-t-2xl flex flex-row items-center justify-start overflow-y-hidden overflow-x-auto scrollbar">
      <Link href="/"><a className="my-1.5 mx-2">Headers</a></Link>
      <Link href="/components"><a className="my-1.5 mx-2">Components</a></Link>
      <Link href="/footers"><a className="my-1.5 mx-2">Footers</a></Link>
      <Link href="/footers"><a className="my-1.5 mx-2">Footers</a></Link>
      <Link href="/footers"><a className="my-1.5 mx-2">Footers</a></Link>
      <Link href="/footers"><a className="my-1.5 mx-2">Footers</a></Link>
    </nav>
  )
}