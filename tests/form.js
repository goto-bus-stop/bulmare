import React from 'react'
import test from 'tape'
import { render, shallow } from 'enzyme'
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
  t.ok(render(<Control />).hasClass('control'))
  t.end()
})

test('Controls should render an icon if the "icon" prop is given', (t) => {
  t.equal(shallow(
    <Control icon={<Icon name='email' />}>
      <Input type='email' />
    </Control>
  ).html(), shallow(
    <div className='control has-icon'>
      <Icon name='email' />
      <Input type='email' />
    </div>
  ).html())

  // And on the right…
  t.equal(shallow(
    <Control iconRight={<Icon name='check' />}>
      <Input />
    </Control>
  ).html(), shallow(
    <div className='control has-icon has-icon-right'>
      <Icon name='check' />
      <Input />
    </div>
  ).html())
  t.end()
})

test('Controls can be grouped', (t) => {
  t.equal(shallow(
    <ControlGroup>
      <Control />
      <Control expanded />
    </ControlGroup>
  ).html(), shallow(
    <div className='control is-grouped'>
      <Control />
      <Control expanded />
    </div>
  ).html())
  t.end()
})

test('Horizontal form controls render a Control with class "is-horizontal"', (t) => {
  t.ok(render(<HorizontalGroup />).is('.control.is-horizontal'))
  t.end()
})

test('Labels should have class "label"', (t) => {
  t.ok(render(<Label>Username</Label>).is('label.label'))
  t.end()
})

test('Control Labels should render a Label inside a div with class "control-label"', (t) => {
  t.ok(render(<ControlLabel>Username</ControlLabel>).hasClass('control-label'))

  const contents = shallow(<ControlLabel>Username</ControlLabel>).childAt(0)
  t.equal(
    contents.html(),
    shallow(<Label>Username</Label>).html()
  )
  t.end()
})

test('HTML Inputs should have class "input"', (t) => {
  t.ok(render(<Input name='name' />).hasClass('input'))
  t.end()
})

test('HTML Inputs support color modifiers', (t) => {
  t.ok(render(<Input warning />).hasClass('is-warning'))
  t.end()
})

test('Textareas should have class "textarea"', (t) => {
  t.ok(render(<Textarea />).is('textarea.textarea'))
  t.end()
})

test('Checkboxes should have type "checkbox" and class "checkbox"', (t) => {
  t.ok(render(<Checkbox checked />).is('input[type="checkbox"].checkbox:checked'))
  t.end()
})

test('Radio buttons should have type "radio" and class "radio"', (t) => {
  t.ok(render(<Radio />).is('input[type="radio"].radio'))
  t.end()
})
