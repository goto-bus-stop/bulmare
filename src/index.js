import cx from 'classnames'
import React from 'react'
import compose from 'recompose/compose'
import mapProps from 'recompose/mapProps'
import withProps from 'recompose/withProps'
import defaultProps from 'recompose/defaultProps'
import componentFromProp from 'recompose/componentFromProp'
import nest from 'recompose/nest'

const withClassName = (className) =>
  withProps((props) => ({
    className: cx(className, props.className)
  }))

const bulmaComponent = (defaultType, className, ...hocs) =>
  compose(
    ...hocs,
    withClassName(className),
    defaultProps({ component: defaultType })
  )(componentFromProp('component'))

const withModifiers = (classNames) =>
  mapProps((props) => {
    const newProps = { ...props }
    const classes = []
    Object.keys(classNames).forEach((modifier) => {
      if (props[modifier]) {
        newProps[modifier] = undefined
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
export const Content = bulmaComponent('div', 'content')

// http://bulma.io/documentation/elements/button/
export const Button = bulmaComponent('button', 'button', withColorModifiers)

// http://bulma.io/documentation/elements/delete/
export const Delete = bulmaComponent('button', 'delete', withSizeModifiers)

// http://bulma.io/documentation/elements/form/
export const Control = bulmaComponent('div', 'control')
export const Label = bulmaComponent('label', 'label')
export const Input = bulmaComponent('input', 'input')
export const Textarea = bulmaComponent('textarea', 'textarea')
export const Checkbox = bulmaComponent('input', 'checkbox', withProps({ type: 'checkbox' }))
export const Radio = bulmaComponent('input', 'radio', withProps({ type: 'radio' }))

// http://bulma.io/documentation/components/menu/
export const MenuLabel = bulmaComponent('p', 'menu-label')
export const MenuList = bulmaComponent('ul', 'menu-list')
export const MenuItem = 'li'

// http://bulma.io/documentation/components/pagination/
export const Pagination = bulmaComponent('nav', 'pagination')
export const PaginationPrevious = bulmaComponent('a', 'pagination-previous', withDisableModifier)
export const PaginationNext = bulmaComponent('a', 'pagination-next', withDisableModifier)
export const PaginationList = bulmaComponent('ul', 'pagination-list', withDisableModifier)
export const PaginationLink = nest('li', bulmaComponent('a', 'pagination-link'))
export const PaginationEllipsis = nest('li',
  bulmaComponent('span', 'pagination-ellipsis', defaultProps({ children: '…' }))
)

// http://bulma.io/documentation/elements/icon/
const FontAwesome = bulmaComponent('i', 'fa')
const IconWrapper = bulmaComponent('span', 'icon')
export const Icon = ({ name, ...props }) =>
  React.createElement(IconWrapper, props,
    React.createElement(FontAwesome, { className: `fa-${name}` })
  )

// http://bulma.io/documentation/components/message/
export const Message = bulmaComponent('article', 'message', withColorModifiers)
export const MessageHeader = bulmaComponent('div', 'message-header')
export const MessageBody = bulmaComponent('div', 'message-body')

// http://bulma.io/documentation/elements/notification/
export const Notification = bulmaComponent('div', 'notification', withColorModifiers)

// http://bulma.io/documentation/elements/tag/
export const Tag = bulmaComponent('span', 'tag', withColorModifiers, withSizeModifiers)

// http://bulma.io/documentation/elements/progress/
export const Progress = bulmaComponent('progress', 'progress')
