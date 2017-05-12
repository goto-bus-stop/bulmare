import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import { Level, LevelItem, LevelLeft, LevelRight } from '../src'

test('Level renders a div with class "level"', (t) => {
  t.true(shallow(<Level />).dive().equals(
    <div className='level' />
  ))
  t.end()
})

test('Level has a `mobile` modifier', (t) => {
  t.true(shallow(<Level mobile />).dive().is('div.level.is-mobile'))
  t.end()
})

test('Level items have the "level-item" class', (t) => {
  t.true(shallow(<LevelItem />).dive().equals(
    <div className='level-item' />
  ))
  t.end()
})

test('LevelLeft components have the "level-left" class', (t) => {
  t.true(shallow(<LevelLeft />).dive().equals(
    <div className='level-left' />
  ))
  t.end()
})

test('LevelRight components have the "level-right" class', (t) => {
  t.true(shallow(<LevelRight />).dive().equals(
    <div className='level-right' />
  ))
  t.end()
})
