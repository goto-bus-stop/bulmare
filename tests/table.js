import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import { Table } from '../src'

test('Table renders a <table /> with class "table"', (t) => {
  t.equal(
    shallow(<Table />).html(),
    shallow(<table className='table' />).html()
  )
  t.end()
})

test('Table supports modifiers', (t) => {
  t.equal(
    shallow(<Table bordered />).html(),
    shallow(<table className='table is-bordered' />).html()
  )

  t.equal(
    shallow(<Table striped />).html(),
    shallow(<table className='table is-striped' />).html()
  )

  t.equal(
    shallow(<Table narrow />).html(),
    shallow(<table className='table is-narrow' />).html()
  )
  t.end()
})
