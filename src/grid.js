import cx from 'classnames'
import compose from 'recompose/compose'
import mapProps from 'recompose/mapProps'
import { bulmaComponent, withModifiers } from './internal'

const withGridSize = mapProps(({ size, className, ...props }) => ({
  ...props,
  className: cx(size && `is-${size}`, className)
}))

// http://bulma.io/documentation/grid/columns/
export const Columns = bulmaComponent('div', 'columns')
export const Column = bulmaComponent('div', 'column', withGridSize)

export const Tile = bulmaComponent('div', 'tile', compose(
  withModifiers({
    ancestor: 'is-ancestor',
    parent: 'is-parent',
    child: 'is-child',
    vertical: 'is-vertical'
  }),
  withGridSize
))
