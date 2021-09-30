import SliceZone from 'next-slicezone'
import { useGetStaticProps } from 'next-slicezone/hooks'
import Prismic from '@prismicio/client'
import { Client } from '../prismic-configuration'

import resolver from '../sm-resolver'
import { getAllCourses } from '../utils/api'

export default function Nosotros({ aboutpage }) {
  return <SliceZone {...aboutpage} resolver={resolver} />
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
