import SliceZone from 'next-slicezone'
import { useGetStaticProps } from 'next-slicezone/hooks'
import Prismic from '@prismicio/client'
import { Client } from '../prismic-configuration'

import resolver from '../sm-resolver'

export default function Home({ faq }) {
  return <SliceZone resolver={resolver} slices={faq.data.slices} />
}

export const getStaticProps = async (...args) => {
  // Same useGetStaticProps call
  const faq = await useGetStaticProps({
    client: Client(),
    type: 'faq',
    queryType: 'single',
  })(...args)

  return {
    props: {
      faq: faq.props,
    },
  }
}
