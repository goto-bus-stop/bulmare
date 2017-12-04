import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import { Title, Subtitle } from '../src'

test('Title renders an h1 element with class "title"', (t) => {
  t.equal(
    shallow(<Title />).html(),
    shallow(<h1 className='title' />).html()
  )
  t.end()
})

test('Title renders different h-elements depending on size', (t) => {
  t.equal(
    shallow(<Title is={2} />).html(),
    shallow(<h2 className='title is-2' />).html()
  )
  t.equal(
    shallow(<Title is={6} />).html(),
    shallow(<h6 className='title is-6' />).html()
  )
  t.end()
})

test('Subtitle renders an h2 element with class "subtitle"', (t) => {
  t.equal(
    shallow(<Subtitle />).html(),
    shallow(<h2 className='subtitle' />).html()
  )
  t.end()
})

test('Subtitle renders different h-elements depending on size', (t) => {
  t.equal(
    shallow(<Subtitle is={2} />).html(),
    shallow(<h2 className='subtitle is-2' />).html()
  )
  t.equal(
    shallow(<Subtitle is={6} />).html(),
    shallow(<h6 className='subtitle is-6' />).html()
  )
  t.end()
})
