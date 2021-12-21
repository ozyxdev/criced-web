import SliceZone from 'next-slicezone'
import { useGetStaticProps } from 'next-slicezone/hooks'
import Head from 'next/head'
import { Client } from '../prismic-configuration'
import resolver from '../sm-resolver'

export default function Home({ homepage }) {
  return (
    <div>
      <Head>
        <title> CRICED | Inicio </title>
        <SliceZone resolver={resolver} slices={homepage.data.slices1} />
      </Head>
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
