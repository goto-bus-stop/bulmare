import React from 'react'
import test from 'tape'
import { render, shallow } from 'enzyme'
import { Breadcrumbs, Breadcrumb } from '../src'

test('<Breadcrumbs /> should be a <nav> with class "breadcrumb"', (t) => {
  t.ok(render(<Breadcrumbs />).is('nav.breadcrumb'))
  t.ok(shallow(<Breadcrumbs />).childAt(0).dive().is('ul'))

  t.end()
})

test('<Breadcrumbs /> supports alignment modifiers', (t) => {
  t.ok(render(<Breadcrumbs centered />).hasClass('is-centered'))
  t.ok(render(<Breadcrumbs right />).hasClass('is-right'))

  t.end()
})

test('<Breadcrumbs /> supports alternate separators', (t) => {
  t.ok(render(<Breadcrumbs separator='arrow' />).hasClass('has-arrow-separator'))
  t.ok(render(<Breadcrumbs separator='bullet' />).hasClass('has-bullet-separator'))
  t.ok(render(<Breadcrumbs separator='dot' />).hasClass('has-dot-separator'))
  t.ok(render(<Breadcrumbs separator='succeeds' />).hasClass('has-succeeds-separator'))

  t.end()
})

test('<Breadcrumbs /> supports size modifiers', (t) => {
  t.ok(render(<Breadcrumbs small />).hasClass('is-small'))
  t.ok(render(<Breadcrumbs medium />).hasClass('is-medium'))
  t.ok(render(<Breadcrumbs large />).hasClass('is-large'))

  t.end()
})

test('<Breadcrumb /> renders a <li>', (t) => {
  t.ok(render(<Breadcrumb />).is('li'))

  t.end()
})
