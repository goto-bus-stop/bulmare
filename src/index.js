import cx from 'classnames'
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

// http://bulma.io/documentation/layout/container/
export const Container = bulmaComponent('div', 'container')
export const Header = nest(bulmaComponent('div', 'header'), Container)
export const Hero = nest(bulmaComponent('div', 'hero'), Container)
export const Section = nest(bulmaComponent('div', 'section'), Container)
export const Footer = nest(bulmaComponent('div', 'footer'), Container)

// http://bulma.io/documentation/grid/columns/
export const Columns = bulmaComponent('div', 'columns')
export const Column = bulmaComponent('div', 'column',
  mapProps((props) => ({
    ...props,
    size: undefined,
    className: cx(props.size && `is-${props.size}`, props.className)
  }))
)

// http://bulma.io/documentation/elements/box/
export const Box = bulmaComponent('div', 'box')

// http://bulma.io/documentation/elements/content/
export const Content = bulmaComponent('div', 'content')

// http://bulma.io/documentation/elements/button/
export const Button = bulmaComponent('button', 'button')

// http://bulma.io/documentation/elements/delete/
export const Delete = bulmaComponent('button', 'delete')

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

// http://bulma.io/documentation/elements/icon/
const FontAwesome = bulmaComponent('i', 'fa')
const IconWrapper = bulmaComponent('span', 'icon')
export const Icon = (props) => (
  <IconWrapper {...props} name={undefined}>
    <FontAwesome className={`fa-${props.name}`} />
  </IconWrapper>
)

// http://bulma.io/documentation/components/message/
export const Message = bulmaComponent('article', 'message')
export const MessageHeader = bulmaComponent('div', 'message-header')
export const MessageBody = bulmaComponent('div', 'message-body')

// http://bulma.io/documentation/elements/notification/
export const Notification = bulmaComponent('div', 'notification')

// http://bulma.io/documentation/elements/tag/
export const Tag = bulmaComponent('span', 'tag')

// http://bulma.io/documentation/elements/progress/
export const Progress = bulmaComponent('progress', 'progress')
