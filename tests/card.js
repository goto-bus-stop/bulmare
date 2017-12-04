import React from 'react'
import test from 'tape'
import { render, shallow } from 'enzyme'
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardHeaderIcon,
  CardImage,
  CardContent,
  CardFooter,
  CardFooterItem,
  CardFooterLink,
  Icon
} from '../src'

test('<Card /> should be a wrapper element with class "card"', (t) => {
  t.ok(render(<Card>Contents</Card>).is('div.card'))
  t.ok(shallow(<Card>Contents</Card>).childAt(0).equals('Contents'))

  t.end()
})

test('CardHeader should render a <header> element with class "card-header"', (t) => {
  t.ok(render(<CardHeader />).is('header.card-header'))
  t.end()
})

test('CardHeader should render a different element if requested', (t) => {
  t.ok(render(<CardHeader component='div' />).is('div.card-header'))

  t.end()
})

test('CardHeader should accept "title" shorthand prop', (t) => {
  t.equal(shallow(<CardHeader title='Card Title' />).html(), shallow(
    <header className='card-header'>
      <CardHeaderTitle>Card Title</CardHeaderTitle>
    </header>
  ).html())

  t.end()
})

test('CardHeader should accept "icon" shorthand prop', (t) => {
  t.equal(shallow(
    <CardHeader
      icon={<Icon name='test' />}
    />
  ).html(), shallow(
    <header className='card-header'>
      <CardHeaderIcon>
        <Icon name='test' />
      </CardHeaderIcon>
    </header>
  ).html())

  t.end()
})

test('CardHeader should render both custom children and children injected by props', (t) => {
  t.equal(shallow(
    <CardHeader
      title='Card'
      icon={<Icon name='card' />}
    >
      <button>Example</button>
    </CardHeader>
  ).html(), shallow(
    <header className='card-header'>
      <CardHeaderTitle>Card</CardHeaderTitle>
      <CardHeaderIcon>
        <Icon name='card' />
      </CardHeaderIcon>
      <button>Example</button>
    </header>
  ).html())
  t.end()
})

test('CardImage should have class "card-image"', (t) => {
  t.ok(render(<CardImage />).hasClass('card-image'))
  t.end()
})

test('CardContent should have class "card-content"', (t) => {
  t.ok(render(<CardContent />).hasClass('card-content'))
  t.end()
})

test('CardFooter should be a <footer> with class "card-footer"', (t) => {
  t.ok(render(<CardFooter />).is('footer.card-footer'))
  t.end()
})

test('CardFooterItem should have class "card-footer-item"', (t) => {
  t.ok(render(<CardFooterItem />).hasClass('card-footer-item'))
  t.end()
})

test('CardFooterLink should be a link with class "card-footer-item"', (t) => {
  t.ok(render(<CardFooterLink href='http://bulma.io' />).is('a.card-footer-item'))
  t.end()
})
