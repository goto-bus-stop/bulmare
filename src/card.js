import React from 'react'
import mapProps from 'recompose/mapProps'
import { bulmaComponent } from './internal'

// http://bulma.io/documentation/components/card/
export const Card = bulmaComponent('div', 'card')
export const CardHeaderTitle = bulmaComponent('p', 'card-header-title')
export const CardHeaderIcon = bulmaComponent('a', 'card-header-icon')
export const CardHeader = bulmaComponent('header', 'card-header',
  // Add `title` and `icon` shortcut props.
  mapProps(({ title, icon, ...props }) => ({
    ...props,
    children: [
      title && <CardHeaderTitle>{title}</CardHeaderTitle>,
      icon && <CardHeaderIcon>{icon}</CardHeaderIcon>
    ].concat(props.children).filter(Boolean)
  }))
)
export const CardImage = bulmaComponent('div', 'card-image')
export const CardContent = bulmaComponent('div', 'card-content')
export const CardFooter = bulmaComponent('footer', 'card-footer')
export const CardFooterItem = bulmaComponent('span', 'card-footer-item')
export const CardFooterLink = bulmaComponent('a', 'card-footer-item')
