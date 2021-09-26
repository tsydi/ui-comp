import type { GetServerSideProps, NextPage } from 'next'
import { Description } from '../../components/Description'
import { Layout } from '../../components/Layout'
import { Preview } from '../../components/Preview'
import { sanityClient, urlFor } from "../../lib/sanity"
import { groq } from 'next-sanity'
import Link from 'next/link'
import Image from 'next/image'

interface IComponents {
  [key: string]: string[];
}

const componentsQuery = groq`
  *[_type == "component"][0]{
    _id,
    slug,
    title,
    image
  }
`

const Components: NextPage<IComponents> = ({ components }) => {
  return (
   <Layout
    title={''}
    description={''}
    keywords={''}
   >
    <Preview>
      {components?.length > 0 && components.map((component : any) => (
        <article className="w-full h-40 rounded-lg translate border-4 border-solid light-border overflow-hidden" key={component._id}>
          <Link href={`/components/$component.slug.current`}>
            <a className="flex flex-col items-center justify-center relative">
              <Image
                src={urlFor(component.image).url()!}
                width="400"
                height="400"
                objectFit="cover"
                alt={component.title}
              />
              <div className="light pb-1.5 w-full h-8 text-sm font-medium absolute bottom-0 flex items-center justify-center">
                <h3>{component.title}</h3>
              </div>
            </a>
          </Link>
        </article>
      ))}
    </Preview>
    <Description>
      <div className="">

      </div>
      <hr />
      Description
    </Description>
   </Layout>
  )
}

export default Components

export const getServerSideProps: GetServerSideProps = async () => {
  const components = await sanityClient.fetch(componentsQuery);
  return { props: { components } };
}