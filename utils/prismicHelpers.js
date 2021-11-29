import React from 'react'
import { Link } from 'next/link'
import { PrismicLink } from 'apollo-link-prismic'
import ApolloClient from 'apollo-client'
import { linkResolver } from '../prismic-configuration'
import { apiEndpoint } from '../sm.json' // imp

// Helper function to convert Prismic Rich Text links to React Link components
export const customLink = (type, element, content, children, index) => (
  <Link to={linkResolver(element.data)} key={index}>
    {content}
  </Link>
)

// Client method to query documents from the Prismic repo
export const client = new ApolloClient({
  link: PrismicLink({ uri: apiEndpoint }),
})
