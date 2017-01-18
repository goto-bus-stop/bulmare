import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Icon } from '../src'

test('Icon renders an span with class "icon"', (t) => {
  t.true(shallow(<Icon />).dive().dive().is('span.icon'))
})

test('Icon "name" prop is mapped to a font-awesome className', (t) => {
  t.true(shallow(<Icon name='check' />).childAt(0).dive().dive().equals(
    <i className='fa fa-check' />
  ))
})
