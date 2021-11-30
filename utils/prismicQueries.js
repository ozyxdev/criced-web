import gql from 'graphql-tag'
import Cookies from 'js-cookie'
import { client } from './prismicHelpers'

const allCoursesQuery = gql`
  query moreCursos($currentCursor: String, $itemsPerPage: Int) {
    allCursos(after: $currentCursor, first: $itemsPerPage) {
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }

      edges {
        node {
          _meta {
            uid
          }
          title
          description
          grade
          level
        }
      }
    }
  }
`

const maxItemsPerPage = 100 // The limit of the GraphQL API is 20 items

export const queryCursos = async (
  currentCursor = null,
  itemsPerPage = maxItemsPerPage
) =>
  client.query({
    query: gql`
      ${allCoursesQuery}
    `,
    variables: { currentCursor, itemsPerPage },
  })
