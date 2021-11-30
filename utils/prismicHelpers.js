import React from 'react'
import { Link } from 'next/link'
import { PrismicLink } from 'apollo-link-prismic'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag' // imp
import { linkResolver } from '../prismic-configuration'
import { apiEndpoint } from '../sm.json'

// Client method to query documents from the Prismic repo

// Helper function to convert Prismic Rich Text links to React Link components
export const customLink = (type, element, content, children, index) => (
  <Link to={linkResolver(element.data)} key={index}>
    {content}
  </Link>
)

export const client = new ApolloClient({
  link: PrismicLink({
    uri: `https://criced-web.cdn.prismic.io/graphql`,
    accessToken: process.env.PRISMIC_API_TOKEN,
  }),
  cache: new InMemoryCache(),
})
