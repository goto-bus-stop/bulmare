import nest from 'recompose/nest'
import defaultProps from 'recompose/defaultProps'
import { bulmaComponent, withDisableModifier } from './internal'

// http://bulma.io/documentation/components/pagination/
export const Pagination = bulmaComponent('nav', 'pagination')
export const PaginationPrevious = bulmaComponent('a', 'pagination-previous', withDisableModifier)
export const PaginationNext = bulmaComponent('a', 'pagination-next', withDisableModifier)
export const PaginationList = bulmaComponent('ul', 'pagination-list', withDisableModifier)
export const PaginationLink = nest('li', bulmaComponent('a', 'pagination-link'))
export const PaginationEllipsis = nest('li',
  bulmaComponent('span', 'pagination-ellipsis', defaultProps({ children: '…' }))
)
