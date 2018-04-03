import cx from 'classnames'
import React from 'react'
import nest from 'recompose/nest'
import mapProps from 'recompose/mapProps'
import {
  bulmaComponent,
  withModifiers,
  sizeModifiers,
  alignmentModifiers
} from './internal'

export const Breadcrumbs = nest(
  bulmaComponent('nav', 'breadcrumb',
    withModifiers({
      ...sizeModifiers,
      ...alignmentModifiers
    }),
    mapProps(({ className, separator, ...props }) => ({
      ...props,
      className: separator ? cx(className, `has-${separator}-separator`) : className
    }))
  ),
  ({ children }) => <ul>{children}</ul>
)
export const Breadcrumb = bulmaComponent('li')
