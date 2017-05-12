import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import {
  Control,
  ControlGroup,
  HorizontalGroup,
  ControlLabel,
  Label,
  Input,
  Textarea,
  Checkbox,
  Radio,
  Icon
} from '../src'

test('Control should have class "control"', (t) => {
  t.true(shallow(<Control />).hasClass('control'))
  t.end()
})

test('Controls should render an icon if the "icon" prop is given', (t) => {
  t.true(shallow(
    <Control icon={<Icon name='email' />}>
      <Input type='email' />
    </Control>
  ).dive().equals(
    <div className='control has-icon'>
      <Icon name='email' />
      <Input type='email' />
    </div>
  ))

  // And on the right…
  t.true(shallow(
    <Control iconRight={<Icon name='check' />}>
      <Input />
    </Control>
  ).dive().equals(
    <div className='control has-icon has-icon-right'>
      <Icon name='check' />
      <Input />
    </div>
  ))
  t.end()
})

test('Controls can be grouped', (t) => {
  t.true(shallow(
    <ControlGroup>
      <Control />
      <Control expanded />
    </ControlGroup>
  ).dive().equals(
    <div className='control is-grouped'>
      <Control />
      <Control expanded />
    </div>
  ))
  t.end()
})

test('Horizontal form controls render a Control with class "is-horizontal"', (t) => {
  t.true(shallow(<HorizontalGroup />).dive().equals(
    <div className='control is-horizontal' />
  ))
  t.end()
})

test('Labels should have class "label"', (t) => {
  t.true(shallow(<Label>Username</Label>).dive().equals(
    <label className='label'>Username</label>
  ))
  t.end()
})

test('Control Labels should render a Label inside a div with class "control-label"', (t) => {
  t.true(shallow(<ControlLabel>Username</ControlLabel>).hasClass('control-label'))

  const contents = shallow(<ControlLabel>Username</ControlLabel>).childAt(0)
  t.true(contents.equals(shallow(
    <Label>Username</Label>
  ).getNode()))
  t.end()
})

test('HTML Inputs should have class "input"', (t) => {
  t.true(shallow(<Input name='name' />).dive().equals(
    <input className='input' name='name' />
  ))
  t.end()
})

test('HTML Inputs support color modifiers', (t) => {
  t.true(shallow(<Input warning />).dive().equals(
    <input className='input is-warning' />
  ))
  t.end()
})

test('Textareas should have class "textarea"', (t) => {
  t.true(shallow(<Textarea />).dive().equals(
    <textarea className='textarea' />
  ))
  t.end()
})

test('Checkboxes should have type "checkbox" and class "checkbox"', (t) => {
  t.true(shallow(<Checkbox checked />).dive().equals(
    <input type='checkbox' className='checkbox' checked />
  ))
  t.end()
})

test('Radio buttons should have type "radio" and class "radio"', (t) => {
  t.true(shallow(<Radio />).dive().equals(
    <input type='radio' className='radio' />
  ))
  t.end()
})
