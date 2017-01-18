import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Progress } from '../src'

test('Progress renders a progress bar with class "progress"', (t) => {
  t.true(shallow(<Progress />).dive().equals(
    <progress className='progress' />
  ))
})

test('Progress bars support sizes', (t) => {
  t.true(shallow(<Progress small />).hasClass('is-small'))
  t.true(shallow(<Progress medium />).hasClass('is-medium'))
  t.true(shallow(<Progress large />).hasClass('is-large'))
})
