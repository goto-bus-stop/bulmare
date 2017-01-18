import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Button } from '../src'

test('Button renders a button with class "button"', (t) => {
  t.true(shallow(<Button />).dive().equals(
    <button className='button' />
  ))
})

test('Buttons support sizes', (t) => {
  t.true(shallow(<Button small />).hasClass('is-small'))
  t.true(shallow(<Button medium />).hasClass('is-medium'))
  t.true(shallow(<Button large />).hasClass('is-large'))
})

test('Buttons support colours', (t) => {
  t.true(shallow(<Button white />).hasClass('is-white'))
  t.true(shallow(<Button light />).hasClass('is-light'))
  t.true(shallow(<Button dark />).hasClass('is-dark'))
  t.true(shallow(<Button black />).hasClass('is-black'))

  t.true(shallow(<Button primary />).hasClass('is-primary'))
  t.true(shallow(<Button info />).hasClass('is-info'))
  t.true(shallow(<Button success />).hasClass('is-success'))
  t.true(shallow(<Button warning />).hasClass('is-warning'))
  t.true(shallow(<Button danger />).hasClass('is-danger'))

  t.true(shallow(<Button link />).hasClass('is-link'))
})

test('Buttons support states', (t) => {
  t.true(shallow(<Button outlined />).hasClass('is-outlined'))
  t.true(shallow(<Button loading />).hasClass('is-loading'))
})
