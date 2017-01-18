import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
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
  t.true(shallow(<Card>Contents</Card>).dive().equals(
    <div className='card'>
      Contents
    </div>
  ))
})

test('CardHeader should render a <header> element with class "card-header"', (t) => {
  t.true(shallow(<CardHeader />).dive().equals(
    <header className='card-header' />
  ))
})

test('CardHeader should render a different element if requested', (t) => {
  t.true(shallow(<CardHeader component='div' />).dive().equals(
    <div className='card-header' />
  ))
})

test('CardHeader should accept "title" shorthand prop', (t) => {
  t.true(shallow(<CardHeader title='Card Title' />).dive().equals(
    <header className='card-header'>
      <CardHeaderTitle>Card Title</CardHeaderTitle>
    </header>
  ))
})

test('CardHeader should accept "icon" shorthand prop', (t) => {
  t.true(shallow(
    <CardHeader
      icon={<Icon name='test' />}
    />
  ).dive().equals(
    <header className='card-header'>
      <CardHeaderIcon>
        <Icon name='test' />
      </CardHeaderIcon>
    </header>
  ))
})

test('CardHeader should render both custom children and children injected by props', (t) => {
  t.true(shallow(
    <CardHeader
      title='Card'
      icon={<Icon name='card' />}
    >
      <button>Example</button>
    </CardHeader>
  ).dive().equals(
    <header className='card-header'>
      <CardHeaderTitle>Card</CardHeaderTitle>
      <CardHeaderIcon>
        <Icon name='card' />
      </CardHeaderIcon>
      <button>Example</button>
    </header>
  ))
})

test('CardImage should have class "card-image"', (t) => {
  t.true(shallow(<CardImage />).hasClass('card-image'))
})

test('CardContent should have class "card-content"', (t) => {
  t.true(shallow(<CardContent />).hasClass('card-content'))
})

test('CardFooter should be a <footer> with class "card-footer"', (t) => {
  t.true(shallow(<CardFooter />).dive().equals(
    <footer className='card-footer' />
  ))
})

test('CardFooterItem should have class "card-footer-item"', (t) => {
  t.true(shallow(<CardFooterItem />).dive().equals(
    <span className='card-footer-item' />
  ))
})

test('CardFooterLink should be a link with class "card-footer-item"', (t) => {
  t.true(shallow(<CardFooterLink href='http://bulma.io' />).dive().equals(
    <a className='card-footer-item' href='http://bulma.io' />
  ))
})
