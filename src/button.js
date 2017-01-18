import {
  bulmaComponent,
  withModifiers,
  colorModifiers,
  sizeModifiers
} from './internal'

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
