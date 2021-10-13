/* eslint-disable no-case-declarations */
import React from 'react'
import { Elements } from 'prismic-reactjs'
import ListCheckIcon from '../components/shared/icons/ListCheckIcon'
import { linkResolver } from '../prismic-configuration'

// -- Function to add unique key to props
const propsWithUniqueKey = function (props, key) {
  return Object.assign(props || {}, { key })
}

// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
const htmlSerializer = function (type, element, content, children, key) {
  let props = {}

  switch (type) {
    case Elements.listItem: // Unordered List Item
      return (
        <li key={key}>
          <ListCheckIcon />
          {children}
        </li>
      )

    case Elements.list: // Unordered List
      return React.createElement('ul', propsWithUniqueKey(props, key), children)

    case Elements.hyperlink:
      const targetAttr = element.data.target
        ? { target: element.data.target }
        : {}
      const relAttr = element.data.target ? { rel: 'noopener' } : {}
      props = {
        className: 'link-class',
        href: element.data.url || linkResolver(element.data),
        ...targetAttr,
        ...relAttr,
      }
      return React.createElement('a', propsWithUniqueKey(props, key), children)

    default:
  }
}
export default htmlSerializer
