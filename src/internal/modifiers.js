import withModifiers from './withModifiers'

export const colorModifiers = {
  black: 'is-black',
  dark: 'is-dark',
  light: 'is-light',
  white: 'is-white',
  primary: 'is-primary',
  link: 'is-link',
  info: 'is-info',
  success: 'is-success',
  warning: 'is-warning',
  danger: 'is-danger'
}

export const sizeModifiers = {
  small: 'is-small',
  medium: 'is-medium',
  large: 'is-large'
}

export const withColorModifiers = withModifiers(colorModifiers)
export const withSizeModifiers = withModifiers(sizeModifiers)
export const withDisableModifier = withModifiers({
  disabled: 'is-disabled'
})
