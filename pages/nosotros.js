import SliceZone from 'next-slicezone'
import { useGetStaticProps } from 'next-slicezone/hooks'
import Prismic from '@prismicio/client'
import { Client } from '../prismic-configuration'

import resolver from '../sm-resolver'
import { getAllCourses } from '../utils/api'

export default function Nosotros({ aboutpage, home }) {
  const { items, primary } = home.data.slices.filter(
    (slice) => slice.slice_type === 'services_slice'
  )[0]

  return (
    <SliceZone
      resolver={resolver}
      sliceProps={({ sliceName }) => ({
        data: sliceName === 'ServicesSlice' ? { items, primary } : null,
      })}
      slices={aboutpage.data.slices}
    />
  )
}

export const getStaticProps = async (...args) => {
  // Same useGetStaticProps call
  const aboutpage = await useGetStaticProps({
    client: Client(),
    type: 'about-page',
    queryType: 'single',
  })(...args)

  // Query for courses data
  const courses = await getAllCourses()

  return {
    props: {
      aboutpage: aboutpage.props,
    },
  }
}
