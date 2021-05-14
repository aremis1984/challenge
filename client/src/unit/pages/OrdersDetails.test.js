import React from 'react'
import { shallow } from 'enzyme'

import { OrdersDetailsPage } from '../../pages'

const order = require('../data/order.json')

describe('OrdersDetailsPage', () => {
  
  it("render details page", () => {
    const props = { location: { state: order } }
    const wrapper = shallow(<OrdersDetailsPage {...props} />)

    expect(wrapper.find('OrdersWrapper').length).toEqual(1)
    expect(wrapper.find('StyledCard').length).toEqual(2)

    expect(wrapper.find('[data-test="order-data"]').length).toEqual(1)
    expect(wrapper.find('[data-test="order-data"] > p').text()).toEqual('ORD-123-2018')
    expect(wrapper.find('[data-test="order-card"]').length).toEqual(1)

    expect(wrapper.find('[data-test="article"]').length).toEqual(1)
    expect(wrapper.find('[data-test="article"] > div > img').length).toEqual(1)
    expect(wrapper.find('[data-test="article"] > div > img').prop('src')).toEqual('http://cdn.parcellab.com/img/sales-cannon/parcellab-bag.jpg')

    expect(wrapper.find('LinkComponent').length).toEqual(2)
    expect(wrapper.find('LinkComponent').at(0).prop('path')).toEqual('/order-history')
    expect(wrapper.find('LinkComponent').at(1).prop('path')).toEqual('/')

  })
  

})