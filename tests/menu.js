import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Menu, MenuLabel, MenuList, MenuItem } from '../src'

test('<Menu /> renders an aside with class "menu"', (t) => {
  t.true(shallow(<Menu />).dive().equals(
    <aside className='menu' />
  ))
})

test('<MenuItem /> renders a plain list item', (t) => {
  t.true(shallow(<MenuItem />).equals(<li />))
})

test('<MenuList /> renders a list element', (t) => {
  t.true(shallow(<MenuList />).dive().equals(
    <ul className='menu-list' />
  ))

  t.true(shallow(
    <MenuList>
      <MenuItem>Dashboard</MenuItem>
    </MenuList>
  ).dive().equals(
    <ul className='menu-list'>
      <MenuItem>Dashboard</MenuItem>
    </ul>
  ))
})

test('<MenuLabel /> has class "menu-label"', (t) => {
  t.true(shallow(<MenuLabel />).hasClass('menu-label'))
})
