import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Container, Header, Hero, Section, Footer } from '../src'

test('Containers should have class "container"', (t) => {
  t.true(shallow(<Container />).hasClass('container'))
})

test('Containers should render their children', (t) => {
  const wrapper = shallow(
    <Container>
      <h1>Hello world</h1>
    </Container>
  )

  t.true(wrapper.contains(<h1>Hello world</h1>))
})

test('<Header />s should have class "header"', (t) => {
  t.true(shallow(<Header />).hasClass('header'))
})

test('Headers should render a Container', (t) => {
  const contents = shallow(
    <Header>
      <h1>Hello world</h1>
    </Header>
  ).childAt(0)

  t.true(contents.equals(shallow(
    <Container>
      <h1>Hello world</h1>
    </Container>
  ).getNode()))
})

test('<Hero />s should have class "hero"', (t) => {
  t.true(shallow(<Hero />).hasClass('hero'))
})

test('Hero should render a Container', (t) => {
  const contents = shallow(
    <Hero>
      <h1>Hello world</h1>
    </Hero>
  ).childAt(0)

  t.true(contents.equals(shallow(
    <Container>
      <h1>Hello world</h1>
    </Container>
  ).getNode()))
})

test('<Section />s should have class "section"', (t) => {
  t.true(shallow(<Section />).hasClass('section'))
})

test('Sections should render a Container', (t) => {
  const contents = shallow(
    <Section>
      <h1>Hello world</h1>
    </Section>
  ).childAt(0)

  t.true(contents.equals(shallow(
    <Container>
      <h1>Hello world</h1>
    </Container>
  ).getNode()))
})

test('Footers should have class "footer"', (t) => {
  t.true(shallow(<Footer />).hasClass('footer'))
})

test('Footers should render a Container', (t) => {
  const contents = shallow(
    <Footer>
      <h1>Hello world</h1>
    </Footer>
  ).childAt(0)

  t.true(contents.equals(shallow(
    <Container>
      <h1>Hello world</h1>
    </Container>
  ).getNode()))
})
