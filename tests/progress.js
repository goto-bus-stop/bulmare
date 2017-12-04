import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import { Progress } from '../src'

test('Progress renders a progress bar with class "progress"', (t) => {
  t.equal(
    shallow(<Progress />).html(),
    shallow(<progress className='progress' />).html()
  )
  t.end()
})

test('Progress bars support sizes', (t) => {
  t.ok(shallow(<Progress small />).hasClass('is-small'))
  t.ok(shallow(<Progress medium />).hasClass('is-medium'))
  t.ok(shallow(<Progress large />).hasClass('is-large'))
  t.end()
})
