import cx from 'classnames'
import mapProps from 'recompose/mapProps'
import withProps from 'recompose/withProps'
import nest from 'recompose/nest'
import { bulmaComponent, withModifiers, withColorModifiers } from './internal'

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

export const Control = bulmaComponent('div', 'control', withIcons, withModifiers({
  grouped: 'is-grouped',
  expanded: 'is-expanded',
  horizontal: 'is-horizontal'
}))
export const ControlGroup = withProps({ grouped: true })(Control)
export const HorizontalGroup = withProps({ horizontal: true })(Control)
export const Label = bulmaComponent('label', 'label')
export const ControlLabel = nest(bulmaComponent('div', 'control-label'), Label)
export const Input = bulmaComponent('input', 'input', withColorModifiers)
export const Textarea = bulmaComponent('textarea', 'textarea')
export const Checkbox = bulmaComponent('input', 'checkbox', withProps({ type: 'checkbox' }))
export const Radio = bulmaComponent('input', 'radio', withProps({ type: 'radio' }))
