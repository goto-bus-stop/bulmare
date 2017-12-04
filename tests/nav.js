import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import {
  Nav,
  /* eslint-disable no-unused-vars */
  NavLeft,
  NavCenter,
  NavRight,
  NavMenu,
  NavItem,
  NavTab,
  NavToggle
  /* eslint-enable no-unused-vars */
} from '../src'

test('Nav should render a <nav> element with class "nav"', (t) => {
  t.equal(
    shallow(<Nav />).html(),
    shallow(<nav className='nav' />).html()
  )

  t.ok(shallow(<Nav shadow />).hasClass('has-shadow'))
  t.end()
})

test('tests for NavLeft', (t) => {
  t.pass('todo')
  t.end()
})
test('tests for NavCenter', (t) => {
  t.pass('todo')
  t.end()
})
test('tests for NavRight', (t) => {
  t.pass('todo')
  t.end()
})
test('tests for NavMenu', (t) => {
  t.pass('todo')
  t.end()
})
test('tests for NavItem', (t) => {
  t.pass('todo')
  t.end()
})
test('tests for NavTab', (t) => {
  t.pass('todo')
  t.end()
})
test('tests for NavToggle', (t) => {
  t.pass('todo')
  t.end()
})
