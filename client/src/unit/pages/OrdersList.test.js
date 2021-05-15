import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import apis from '../../api'

import { OrdersListPage } from '../../pages'

const tracking = require('../data/trackings.json')

describe('OrdersListPage', () => {
  const props = { history: { push: jest.fn(), location: { state: { email:'t@t.de' } }, listen: jest.fn() } }

  let sandbox;
  let fetch = null

  beforeEach(function () {
    sandbox = sinon.createSandbox()
    fetch = sandbox.stub(apis, 'getTrackingsByEmail')
  })

  afterEach(function () {
    sandbox.restore()
  })

  it("shows error", (done) => {
    const res = { email: 't@t.de', not_found: true }
    fetch.returns(Promise.resolve(res))
    const wrapper = shallow(<OrdersListPage {...props} />)

    setTimeout(() => {
      wrapper.update()
      expect(wrapper.state('hasError')).toEqual(res.not_found)
      expect(wrapper.find('.text-info').text()).toEqual(res.email)
      done()
    })
  })

  it("shows orders list", (done) => {
    fetch.returns(Promise.resolve(tracking))
    const wrapper = shallow(<OrdersListPage {...props} />)
    setTimeout(() => {
      wrapper.update()
      expect(wrapper.state('email')).toEqual(tracking.email)
      expect(wrapper.find('OrderCardComponent').length).toEqual(2)
      done()
    })
  })

})