import SliceZone from 'next-slicezone'
import { useGetStaticProps, useGetStaticPaths } from 'next-slicezone/hooks'
import { useRouter } from 'next/router'
import { Client } from '../../prismic-configuration'

// Custom components
import Loader from '../../components/Loader'
import Custom404 from '../404'
import useUpdatePreviewRef from '../../utils/useUpdatePreviewRef'

import resolver from '../../sm-resolver'
import { getAllCoursesWithSlug } from '../../utils/api'

const Page = ({ curso, previewRef }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loader />
  }

  if (!curso.id) {
    return <Custom404 />
  }

  useUpdatePreviewRef(previewRef, curso.id)
  return <SliceZone resolver={resolver} slices={curso.data.slices} />
}

export const getStaticProps = async ({ params, previewData }) => {
  const previewRef = previewData ? previewData.ref : null
  const refOption = previewRef ? { ref: previewRef } : null

  const curso = await Client().getByUID('curso', params.uid, refOption)

  return {
    props: {
      curso,
      previewRef,
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
