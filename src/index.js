import cx from 'classnames'
import React from 'react'
import compose from 'recompose/compose'
import mapProps from 'recompose/mapProps'
import withProps from 'recompose/withProps'
import defaultProps from 'recompose/defaultProps'
import componentFromProp from 'recompose/componentFromProp'
import setDisplayName from 'recompose/setDisplayName'
import nest from 'recompose/nest'

const withClassName = (className) =>
  withProps((props) => ({
    className: cx(className, props.className)
  }))

const BaseComponent = componentFromProp('component')

const identity = (a) => a

const bulmaComponent = (defaultType, className, ...hocs) =>
  compose(
    ...hocs,
    className ? withClassName(className) : identity,
    defaultProps({ component: defaultType })
  )(BaseComponent)

const withModifiers = (classNames) =>
  mapProps((props) => {
    const newProps = { ...props }
    const classes = []
    Object.keys(classNames).forEach((modifier) => {
      if (props[modifier]) {
        delete newProps[modifier]
        classes.push(classNames[modifier])
      }
    })
    newProps.className = cx(props.className, classes)
    return newProps
  })

const colorModifiers = {
  black: 'is-black',
  dark: 'is-dark',
  light: 'is-light',
  white: 'is-white',
  primary: 'is-primary',
  info: 'is-info',
  success: 'is-success',
  warning: 'is-warning',
  danger: 'is-danger',
}

const sizeModifiers = {
  small: 'is-small',
  medium: 'is-medium',
  large: 'is-large',
}

const withColorModifiers = withModifiers(colorModifiers)
const withSizeModifiers = withModifiers(sizeModifiers)
const withDisableModifier = withModifiers({
  disabled: 'is-disabled'
})

// http://bulma.io/documentation/layout/container/
export const Container = bulmaComponent('div', 'container')
export const Header = nest(bulmaComponent('div', 'header'), Container)
export const Hero = nest(bulmaComponent('div', 'hero'), Container)
export const Section = nest(bulmaComponent('div', 'section'), Container)
export const Footer = nest(bulmaComponent('div', 'footer'), Container)

// http://bulma.io/documentation/grid/columns/
export const Columns = bulmaComponent('div', 'columns')
export const Column = bulmaComponent('div', 'column',
  mapProps(({ size, className, ...props }) => ({
    ...props,
    className: cx(size && `is-${size}`, className)
  }))
)

// http://bulma.io/documentation/elements/box/
export const Box = bulmaComponent('div', 'box')

// http://bulma.io/documentation/elements/content/
export const Content = bulmaComponent('div', 'content', withSizeModifiers)

// http://bulma.io/documentation/elements/button/
export const Button = bulmaComponent('button', 'button',
  withModifiers({
    ...colorModifiers,
    ...sizeModifiers,
    link: 'is-link',
    outlined: 'is-outlined',
    loading: 'is-loading'
    // Not including the `disabled` state because the prop will disable the
    // button and apply the appropriate styles that way.
  })
)

// http://bulma.io/documentation/elements/delete/
export const Delete = bulmaComponent('button', 'delete', withSizeModifiers)

// http://bulma.io/documentation/elements/form/
const withIcons = mapProps(({ icon, iconRight, children, className, ...props }) => ({
  ...props,
  // Only one of icon/iconRight should be used, should perhaps throw for that
  // later in dev mode.
  className: cx(
    className,
    iconRight && 'has-icon has-icon-right',
    icon && 'has-icon'
  ),
  children: [
    icon,
    iconRight
  ].concat(children).filter(Boolean)
}))

export const Control = bulmaComponent('div', 'control', withIcons)
export const Label = bulmaComponent('label', 'label')
export const Input = bulmaComponent('input', 'input')
export const Textarea = bulmaComponent('textarea', 'textarea')
export const Checkbox = bulmaComponent('input', 'checkbox', withProps({ type: 'checkbox' }))
export const Radio = bulmaComponent('input', 'radio', withProps({ type: 'radio' }))

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

// http://bulma.io/documentation/components/menu/
export const Menu = bulmaComponent('aside', 'menu')
export const MenuLabel = bulmaComponent('p', 'menu-label')
export const MenuList = bulmaComponent('ul', 'menu-list')
export const MenuItem = bulmaComponent('li')

// http://bulma.io/documentation/components/pagination/
export const Pagination = bulmaComponent('nav', 'pagination')
export const PaginationPrevious = bulmaComponent('a', 'pagination-previous', withDisableModifier)
export const PaginationNext = bulmaComponent('a', 'pagination-next', withDisableModifier)
export const PaginationList = bulmaComponent('ul', 'pagination-list', withDisableModifier)
export const PaginationLink = nest('li', bulmaComponent('a', 'pagination-link'))
export const PaginationEllipsis = nest('li',
  bulmaComponent('span', 'pagination-ellipsis', defaultProps({ children: '…' }))
)

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
  children: [<span />, <span />, <span />]
}))

// http://bulma.io/documentation/elements/icon/
const FontAwesome = bulmaComponent('i', 'fa')
const IconWrapper = bulmaComponent('span', 'icon')
export const Icon = ({ name, ...props }) =>
  <IconWrapper {...props}>
    <FontAwesome className={`fa-${name}`} />
  </IconWrapper>

// http://bulma.io/documentation/components/message/
export const Message = bulmaComponent('article', 'message', withColorModifiers)
export const MessageHeader = bulmaComponent('div', 'message-header')
export const MessageBody = bulmaComponent('div', 'message-body')

// http://bulma.io/documentation/elements/notification/
export const Notification = bulmaComponent('div', 'notification', withColorModifiers)

// http://bulma.io/documentation/elements/tag/
export const Tag = bulmaComponent('span', 'tag', withColorModifiers, withSizeModifiers)

// http://bulma.io/documentation/elements/progress/
export const Progress = bulmaComponent('progress', 'progress', withSizeModifiers)
