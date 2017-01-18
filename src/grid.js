import cx from 'classnames'
import mapProps from 'recompose/mapProps'
import { bulmaComponent } from './internal'

// http://bulma.io/documentation/grid/columns/
export const Columns = bulmaComponent('div', 'columns')
export const Column = bulmaComponent('div', 'column',
  mapProps(({ size, className, ...props }) => ({
    ...props,
    className: cx(size && `is-${size}`, className)
  }))
)
