import {
  bulmaComponent,
  withModifiers,
  colorModifiers,
  sizeModifiers,
  stateModifiers
} from './internal'

// http://bulma.io/documentation/elements/button/
export const Button = bulmaComponent('button', 'button',
  withModifiers({
    ...colorModifiers,
    ...sizeModifiers,
    ...stateModifiers,
    text: 'is-text',
    inverted: 'is-inverted',
    rounded: 'is-rounded',
    static: 'is-static',
    outlined: 'is-outlined',
    loading: 'is-loading'
    // Not including the `disabled` state because the prop will disable the
    // button and apply the appropriate styles that way.
  })
)
