import React from 'react'
import test from 'tape'
import { render, shallow } from 'enzyme'
import { Content } from '../src'

test('Content renders a div with class "content"', (t) => {
  t.ok(render(<Content />).hasClass('content'))
  t.end()
})

test('Content passes through content', (t) => {
  t.ok(shallow(
    <Content>
      <p>Styled <strong>content</strong></p>
    </Content>
  ).childAt(0).equals(
    <p>Styled <strong>content</strong></p>
  ))
  t.end()
})

test('Content supports size modifiers', (t) => {
  t.ok(render(<Content small />).hasClass('is-small'))
  t.ok(render(<Content medium />).hasClass('is-medium'))
  t.ok(render(<Content large />).hasClass('is-large'))
  t.end()
})
