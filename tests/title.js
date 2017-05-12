import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import { Title, Subtitle } from '../src'

test('Title renders an h1 element with class "title"', (t) => {
  t.true(shallow(<Title />).dive().equals(
    <h1 className='title' />
  ))
  t.end()
})

test('Title renders different h-elements depending on size', (t) => {
  t.true(shallow(<Title is={2} />).dive().equals(
    <h2 className='title is-2' />
  ))
  t.true(shallow(<Title is={6} />).dive().equals(
    <h6 className='title is-6' />
  ))
  t.end()
})

test('Subtitle renders an h2 element with class "subtitle"', (t) => {
  t.true(shallow(<Subtitle />).dive().equals(
    <h2 className='subtitle' />
  ))
  t.end()
})

test('Subtitle renders different h-elements depending on size', (t) => {
  t.true(shallow(<Subtitle is={2} />).dive().equals(
    <h2 className='subtitle is-2' />
  ))
  t.true(shallow(<Subtitle is={6} />).dive().equals(
    <h6 className='subtitle is-6' />
  ))
  t.end()
})
