import React from 'react'
import test from 'tape'
import { render, shallow } from 'enzyme'
import { Icon } from '../src'

test('Icon renders an span with class "icon"', (t) => {
  t.ok(render(<Icon />).is('span.icon'))
  t.end()
})

test('Icon "name" prop is mapped to a font-awesome className', (t) => {
  t.equal(
    shallow(<Icon name='check' />).childAt(0).html(),
    shallow(<i className='fa fa-check' />).html()
  )
  t.end()
})
