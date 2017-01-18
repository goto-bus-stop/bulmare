import React from 'react'
import { bulmaComponent } from './internal'

// http://bulma.io/documentation/elements/icon/
const FontAwesome = bulmaComponent('i', 'fa')
const IconWrapper = bulmaComponent('span', 'icon')
export const Icon = ({ name, ...props }) =>
  <IconWrapper {...props}>
    <FontAwesome className={`fa-${name}`} />
  </IconWrapper>