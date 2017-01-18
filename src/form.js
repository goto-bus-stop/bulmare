import cx from 'classnames'
import mapProps from 'recompose/mapProps'
import withProps from 'recompose/withProps'
import { bulmaComponent } from './internal'

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
