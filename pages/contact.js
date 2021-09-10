import SliceZone from 'next-slicezone'
import { useGetStaticProps } from 'next-slicezone/hooks'
import { Client } from '../prismic-configuration'

import resolver from '../sm-resolver'

const Contact = (props) => <SliceZone {...props} resolver={resolver} />

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: 'contact',
  queryType: 'single',
})

// Fetch content from prismic

export default Contact
