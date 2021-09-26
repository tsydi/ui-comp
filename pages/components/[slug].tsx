import { GetServerSideProps, NextPage } from "next"
import { sanityClient, urlFor, PortableText } from '../../lib/sanity'
import { groq } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from "../../components/Layout"
import { Preview } from "../../components/Preview"
import { Description } from "../../components/Description"

interface IComponent {
  [key: string]: string;
}

const Component: NextPage<IComponent> = ({
  _id,
  title,
  technologies,
  updatedAt,
  code,
  image
}) => {
  
  return (
    <Layout
      title={''}
      description={''}
      keywords={''}
    >
      <Preview>
        <article className="w-full h-40 rounded-lg translate border-4 border-solid light-border overflow-hidden" key={_id}>
          <Link href={`/components/$component.slug.current`}>
            <a className="flex flex-col items-center justify-center relative">
              <Image
                src={urlFor(image).url()!}
                width="400"
                height="400"
                objectFit="cover"
                alt={title}
              />
              <div className="light pb-1.5 w-full h-8 text-sm font-medium absolute bottom-0 flex items-center justify-center">
                <h3>{title}</h3>
              </div>
            </a>
          </Link>
        </article>
      </Preview>
      <Description>
        <div className="grid grid-cols-2">
          <h1>{title}</h1>
          <div className="flex-col">
            <span>{updatedAt}</span>
            <span>{technologies}</span>
          </div>
        </div>
        <hr />
        <div>
          <PortableText blocks={code} />
        </div>
      </Description>
   </Layout>
  )
}

export default Component

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const componentQuery = groq`*[ _type == "component" && slug.current == $pageSlug][0]{
    _id,
    title,
    technologies,
    updatedAt,
    code,
    image
  }`

  const component = await sanityClient.fetch(componentQuery, { pageSlug })

  if (!component) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        _id: component._id,
        title: component.title,
        technologies: component.technologies,
        updatedAt: component.updatedAt,
        code: component.code,
        image: component.image,
      },
    }
  }
}