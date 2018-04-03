import React from 'react'
import test from 'tape'
import { render } from 'enzyme'
import { Button } from '../src'

test('Button renders a button with class "button"', (t) => {
  t.ok(render(<Button />).is('button.button'))

  t.end()
})

test('Buttons support sizes', (t) => {
  t.ok(render(<Button small />).hasClass('is-small'))
  t.ok(render(<Button medium />).hasClass('is-medium'))
  t.ok(render(<Button large />).hasClass('is-large'))

  t.end()
})

test('Buttons support colours', (t) => {
  t.ok(render(<Button white />).hasClass('is-white'))
  t.ok(render(<Button light />).hasClass('is-light'))
  t.ok(render(<Button dark />).hasClass('is-dark'))
  t.ok(render(<Button black />).hasClass('is-black'))
  t.ok(render(<Button primary />).hasClass('is-primary'))
  t.ok(render(<Button info />).hasClass('is-info'))
  t.ok(render(<Button success />).hasClass('is-success'))
  t.ok(render(<Button warning />).hasClass('is-warning'))
  t.ok(render(<Button danger />).hasClass('is-danger'))
  t.ok(render(<Button link />).hasClass('is-link'))

  t.end()
})

test('Buttons support states', (t) => {
  t.ok(render(<Button hovered />).hasClass('is-hovered'))
  t.ok(render(<Button focused />).hasClass('is-focused'))
  t.ok(render(<Button active />).hasClass('is-active'))

  t.end()
})

test('Buttons support variations', (t) => {
  t.ok(render(<Button rounded />).hasClass('is-rounded'))
  t.ok(render(<Button outlined />).hasClass('is-outlined'))
  t.ok(render(<Button loading />).hasClass('is-loading'))

  t.end()
})
