import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Control, Label, Input, Textarea, Checkbox, Radio } from '../src'

test('Control should have class "control"', (t) => {
  t.true(shallow(<Control />).hasClass('control'))
})

test('Labels should have class "label"', (t) => {
  t.true(shallow(<Label>Username</Label>).dive().matchesElement(
    <label className="label">Username</label>
  ))
})

test('HTML Inputs should have class "input"', (t) => {
  t.true(shallow(<Input name="name" />).dive().matchesElement(
    <input className="input" name="name" />
  ))
})

test('Textareas should have class "textarea"', (t) => {
  t.true(shallow(<Textarea />).dive().matchesElement(
    <textarea className="textarea" />
  ))
})

test('Checkboxes should have type "checkbox" and class "checkbox"', (t) => {
  t.true(shallow(<Checkbox checked />).dive().matchesElement(
    <input type="checkbox" className="checkbox" checked />
  ))
})

test('Radio buttons should have type "radio" and class "radio"', (t) => {
  t.true(shallow(<Radio />).dive().matchesElement(
    <input type="radio" className="radio" />
  ))
})
