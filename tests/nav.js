import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import {
  Nav,
  NavLeft,
  NavCenter,
  NavRight,
  NavMenu,
  NavItem,
  NavTab,
  NavToggle
} from '../src'

test('Nav should render a <nav> element with class "nav"', (t) => {
  t.true(shallow(<Nav />).dive().equals(
    <nav className="nav" />
  ))

  t.true(shallow(<Nav shadow />).hasClass('has-shadow'))
})
