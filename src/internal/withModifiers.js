import cx from 'classnames'
import mapProps from 'recompose/mapProps'

const withModifiers = (classNames) =>
  mapProps((props) => {
    const newProps = { ...props }
    const classes = []
    Object.keys(classNames).forEach((modifier) => {
      if (props[modifier]) {
        delete newProps[modifier]
        classes.push(classNames[modifier])
      }
    })
    newProps.className = cx(props.className, classes)
    return newProps
  })

export default withModifiers
