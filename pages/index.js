import SliceZone from 'next-slicezone'
import { useGetStaticProps } from 'next-slicezone/hooks'
import { Client } from '../prismic-configuration'
import resolver from '../sm-resolver'

export default function Home({ homepage }) {
  return (
    <div>
      <SliceZone resolver={resolver} slices={homepage.data.slices} />
    </div>
  )
}

export const getStaticProps = async (...args) => {
  // Same useGetStaticProps call
  const homepage = await useGetStaticProps({
    client: Client(),
    type: 'home-page',
    queryType: 'single',
  })(...args)

  return {
    props: {
      homepage: homepage.props,
    },
  }
}
