import SliceZone from 'next-slicezone'
import { useGetStaticProps } from 'next-slicezone/hooks'
import { Client } from '../prismic-configuration'

import resolver from '../sm-resolver'

export default function Home(props) {
  return <SliceZone {...props} resolver={resolver} />
}

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: 'home-page',
  queryType: 'single',
})
