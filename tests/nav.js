import React from 'react'
import test from 'ava'
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
  t.true(shallow(<Nav />).dive().equals(
    <nav className='nav' />
  ))

  t.true(shallow(<Nav shadow />).hasClass('has-shadow'))
})

test.todo('tests for NavLeft')
test.todo('tests for NavCenter')
test.todo('tests for NavRight')
test.todo('tests for NavMenu')
test.todo('tests for NavItem')
test.todo('tests for NavTab')
test.todo('tests for NavToggle')
