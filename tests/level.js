import React from 'react'
import test from 'tape'
import { render } from 'enzyme'
import { Level, LevelItem, LevelLeft, LevelRight } from '../src'

test('Level renders a div with class "level"', (t) => {
  t.ok(render(<Level />).is('div.level'))
  t.end()
})

test('Level has a `mobile` modifier', (t) => {
  t.ok(render(<Level mobile />).is('div.level.is-mobile'))
  t.end()
})

test('Level items have the "level-item" class', (t) => {
  t.ok(render(<LevelItem />).hasClass('level-item'))
  t.end()
})

test('LevelLeft components have the "level-left" class', (t) => {
  t.ok(render(<LevelLeft />).hasClass('level-left'))
  t.end()
})

test('LevelRight components have the "level-right" class', (t) => {
  t.ok(render(<LevelRight />).hasClass('level-right'))
  t.end()
})
