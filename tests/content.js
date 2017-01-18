import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Content } from '../src'

test('Content renders a div with class "content"', (t) => {
  t.true(shallow(<Content />).hasClass('content'))
})

test('Content passes through content', (t) => {
  t.true(shallow(
    <Content>
      <p>Styled <strong>content</strong></p>
    </Content>
  ).dive().equals(
    <div className='content'>
      <p>Styled <strong>content</strong></p>
    </div>
  ))
})

test('Content supports size modifiers', (t) => {
  t.true(shallow(<Content small />).hasClass('is-small'))
  t.true(shallow(<Content medium />).hasClass('is-medium'))
  t.true(shallow(<Content large />).hasClass('is-large'))
})
