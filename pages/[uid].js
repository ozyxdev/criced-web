import SliceZone from 'next-slicezone'
import { useGetStaticProps, useGetStaticPaths } from 'next-slicezone/hooks'
import { Client } from '../prismic-configuration'

import resolver from '../sm-resolver'

const Page = (props) => <SliceZone {...props} resolver={resolver} />

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  apiParams({ params }) {
    return {
      uid: params.uid,
    }
  },
})

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  formatPath: (prismicDocument) => ({
    params: {
      uid: prismicDocument.uid,
    },
  }),
})

export default Page
