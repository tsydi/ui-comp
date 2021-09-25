import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent
} from 'next-sanity'

const config = {
  projectId: "s6zt675p",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: false
}

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {}
})

export const sanityClient = createClient(config)