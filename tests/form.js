import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Control, Label, Input, Textarea, Checkbox, Radio, Icon } from '../src'

test('Control should have class "control"', (t) => {
  t.true(shallow(<Control />).hasClass('control'))
})

test('Controls should render an icon if the "icon" prop is given', (t) => {
  t.true(shallow(
    <Control icon={<Icon name="email" />}>
      <Input type="email" />
    </Control>
  ).dive().equals(
    <div className="control has-icon">
      <Icon name="email" />
      <Input type="email" />
    </div>
  ))

  // And on the right…
  t.true(shallow(
    <Control iconRight={<Icon name="check" />}>
      <Input />
    </Control>
  ).dive().equals(
    <div className="control has-icon has-icon-right">
      <Icon name="check" />
      <Input />
    </div>
  ))
})

test('Labels should have class "label"', (t) => {
  t.true(shallow(<Label>Username</Label>).dive().equals(
    <label className="label">Username</label>
  ))
})

test('HTML Inputs should have class "input"', (t) => {
  t.true(shallow(<Input name="name" />).dive().equals(
    <input className="input" name="name" />
  ))
})

test('Textareas should have class "textarea"', (t) => {
  t.true(shallow(<Textarea />).dive().equals(
    <textarea className="textarea" />
  ))
})

test('Checkboxes should have type "checkbox" and class "checkbox"', (t) => {
  t.true(shallow(<Checkbox checked />).dive().equals(
    <input type="checkbox" className="checkbox" checked />
  ))
})

test('Radio buttons should have type "radio" and class "radio"', (t) => {
  t.true(shallow(<Radio />).dive().equals(
    <input type="radio" className="radio" />
  ))
})
