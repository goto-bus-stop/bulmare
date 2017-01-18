import compose from 'recompose/compose'
import defaultProps from 'recompose/defaultProps'
import componentFromProp from 'recompose/componentFromProp'
import withClassName from './withClassName'

const BaseComponent = componentFromProp('component')

const identity = (a) => a

const bulmaComponent = (defaultType, className, ...hocs) =>
  compose(
    ...hocs,
    className ? withClassName(className) : identity,
    defaultProps({ component: defaultType })
  )(BaseComponent)

export default bulmaComponent
