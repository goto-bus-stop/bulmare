import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Delete } from '../src'

test('Delete renders a button with class "delete"', (t) => {
  t.true(shallow(<Delete />).dive().equals(
    <button className='delete' />
  ))
})

test('Deletes support sizes', (t) => {
  t.true(shallow(<Delete small />).hasClass('is-small'))
  t.true(shallow(<Delete medium />).hasClass('is-medium'))
  t.true(shallow(<Delete large />).hasClass('is-large'))
})
