import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { Table } from '../src'

test('Table renders a <table /> with class "table"', (t) => {
  t.true(shallow(
    <Table />
  ).dive().equals(
    <table className='table' />
  ))
})

test('Table supports modifiers', (t) => {
  t.true(shallow(
    <Table bordered />
  ).dive().equals(
    <table className='table is-bordered' />
  ))

  t.true(shallow(
    <Table striped />
  ).dive().equals(
    <table className='table is-striped' />
  ))

  t.true(shallow(
    <Table narrow />
  ).dive().equals(
    <table className='table is-narrow' />
  ))
})
