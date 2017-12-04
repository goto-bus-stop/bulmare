import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import { Menu, MenuLabel, MenuList, MenuItem } from '../src'

test('<Menu /> renders an aside with class "menu"', (t) => {
  t.equal(
    shallow(<Menu />).html(),
    shallow(<aside className='menu' />).html()
  )
  t.end()
})

test('<MenuItem /> renders a plain list item', (t) => {
  t.equal(
    shallow(<MenuItem />).html(),
    shallow(<li />).html()
  )
  t.end()
})

test('<MenuList /> renders a list element', (t) => {
  t.equal(
    shallow(<MenuList />).html(),
    shallow(<ul className='menu-list' />).html()
  )

  t.equal(
    shallow(
      <MenuList>
        <MenuItem>Dashboard</MenuItem>
      </MenuList>
    ).html(),
    shallow(
      <ul className='menu-list'>
        <MenuItem>Dashboard</MenuItem>
      </ul>
    ).html()
  )
  t.end()
})

test('<MenuLabel /> has class "menu-label"', (t) => {
  t.ok(shallow(<MenuLabel />).hasClass('menu-label'))
  t.end()
})
