import React from 'react'
import defaultProps from 'recompose/defaultProps'
import { bulmaComponent, withModifiers } from './internal'

// http://bulma.io/documentation/components/nav/
export const Nav = bulmaComponent('nav', 'nav', withModifiers({
  shadow: 'has-shadow'
}))
export const NavLeft = bulmaComponent('div', 'nav-left')
export const NavCenter = bulmaComponent('div', 'nav-center')
export const NavRight = bulmaComponent('div', 'nav-right')
export const NavMenu = bulmaComponent('div', 'nav-menu', withModifiers({
  left: 'nav-left',
  center: 'nav-center',
  right: 'nav-right'
}))
export const NavItem = bulmaComponent('a', 'nav-item')
export const NavTab = defaultProps({ className: 'is-tab' })(NavItem)
export const NavToggle = bulmaComponent('span', 'nav-toggle', defaultProps({
  children: [<span />, <span />, <span />] // eslint-disable-line react/jsx-key
}))
