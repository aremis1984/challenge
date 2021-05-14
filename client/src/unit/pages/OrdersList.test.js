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
    fetch.returns(Promise.reject(new Error()))
    const wrapper = shallow(<OrdersListPage {...props} />)

    setTimeout(() => {
      wrapper.update()
      expect(wrapper.state('hasError')).toEqual(true)
      expect(wrapper.find('.text-info').text()).toEqual('t@t.de')
      done()
    })
  })

  it("shows orders list", (done) => {
    fetch.returns(Promise.resolve(tracking))
    const wrapper = shallow(<OrdersListPage {...props} />)
    setTimeout(() => {
      wrapper.update()
      expect(wrapper.find('OrderCardComponent').length).toEqual(2)
      done()
    })
  })

})