import cx from 'classnames'
import mapProps from 'recompose/mapProps'
import { bulmaComponent, withModifiers } from './internal'

// http://bulma.io/documentation/grid/columns/
export const Columns = bulmaComponent('div', 'columns')
export const Column = bulmaComponent('div', 'column',
  mapProps(({ size, className, ...props }) => ({
    ...props,
    className: cx(size && `is-${size}`, className)
  }))
)

export const Tile = bulmaComponent('div', 'tile', withModifiers({
  ancestor: 'is-ancestor',
  parent: 'is-parent',
  child: 'is-child',
  vertical: 'is-vertical'
}))
