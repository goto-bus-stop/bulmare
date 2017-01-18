import cx from 'classnames'
import withProps from 'recompose/withProps'

const withClassName = (className) =>
  withProps((props) => ({
    className: cx(className, props.className)
  }))

export default withClassName
