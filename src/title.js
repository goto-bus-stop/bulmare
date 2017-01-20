import cx from 'classnames'
import mapProps from 'recompose/mapProps'
import { bulmaComponent } from './internal'

const withTitleSize = mapProps(({ is: size, ...props }) => {
  if (size >= 1 && size <= 6) {
    return {
      ...props,
      component: `h${size}`,
      className: cx(props.className, `is-${size}`)
    }
  }
  return props
})

export const Title = bulmaComponent('h1', 'title', withTitleSize)
export const Subtitle = bulmaComponent('h2', 'subtitle', withTitleSize)
