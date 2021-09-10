import SliceZone from 'next-slicezone'
import { useGetStaticProps } from 'next-slicezone/hooks'
import { Client } from '../prismic-configuration'

import resolver from '../sm-resolver.js'

export default function Home(props) {
  console.log('props', props)
  return <SliceZone {...props} resolver={resolver} />
}

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  apiParams: {
    uid: 'homepage',
  },
})
