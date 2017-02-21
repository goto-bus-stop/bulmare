import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Level, LevelItem, LevelLeft, LevelRight } from '../src'

test('Level renders a div with class "level"', (t) => {
  t.true(shallow(<Level />).dive().equals(
    <div className='level' />
  ))
})

test('Level has a `mobile` modifier', (t) => {
  t.true(shallow(<Level mobile />).dive().is('div.level.is-mobile'))
})

test('Level items have the "level-item" class', (t) => {
  t.true(shallow(<LevelItem />).dive().equals(
    <div className='level-item' />
  ))
})

test('LevelLeft components have the "level-left" class', (t) => {
  t.true(shallow(<LevelLeft />).dive().equals(
    <div className='level-left' />
  ))
})

test('LevelRight components have the "level-right" class', (t) => {
  t.true(shallow(<LevelRight />).dive().equals(
    <div className='level-right' />
  ))
})
