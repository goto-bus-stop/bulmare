import React from 'react'
import test from 'tape'
import { render } from 'enzyme'
import { Delete } from '../src'

test('Delete renders a button with class "delete"', (t) => {
  t.ok(render(<Delete />).is('button.delete'))
  t.end()
})

test('Deletes support sizes', (t) => {
  t.ok(render(<Delete small />).hasClass('is-small'))
  t.ok(render(<Delete medium />).hasClass('is-medium'))
  t.ok(render(<Delete large />).hasClass('is-large'))
  t.end()
})
