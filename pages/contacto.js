import SliceZone from 'next-slicezone'
import { useGetStaticProps } from 'next-slicezone/hooks'
import Prismic from '@prismicio/client'
import { Client } from '../prismic-configuration'

import resolver from '../sm-resolver'
import { getAllCourses } from '../utils/api'

export default function Contacto({ home }) {
  const contactSlice = home.data.slices.filter(
    (slice) => slice.slice_type === 'contact_slice'
  )[0]
  console.log('home', home)
  console.log('contactSlice', contactSlice)

  // console.log('contactSlice', contactSlice);
  return <SliceZone resolver={resolver} slices={[contactSlice]} />
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
