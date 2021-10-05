import SliceZone from 'next-slicezone'
import { useGetStaticProps, useGetStaticPaths } from 'next-slicezone/hooks'
import { Client } from '../../prismic-configuration'

import resolver from '../../sm-resolver'
import { getAllCoursesWithSlug } from '../../utils/api'

const Page = ({ slices }) => <SliceZone resolver={resolver} slices={slices} />

export const getStaticProps = async ({ params }) => {
  const curso = await Client().getByUID('curso', params.uid)

  return {
    props: {
      slices: curso.data.slices,
    },
  }
}

export async function getStaticPaths() {
  const allCursos = await getAllCoursesWithSlug()
  return {
    paths: allCursos?.map(({ node }) => `/cursos/${node._meta.uid}`) || [],
    fallback: true,
  }
}
export default Page
