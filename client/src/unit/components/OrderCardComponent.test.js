import React from 'react'
import { shallow } from 'enzyme'

import { OrderCardComponent } from '../../components'

const order = require('../data/order.json')

describe('OrderCardComponent', () => {

  it("renders OrderCardComponent component", () => {
    const component = shallow(
      <OrderCardComponent
        order={order}
        orderIndex={0}
        history={{ push: jest.fn() }}
      />
    )
    const historyMock = { push: jest.fn() }

    expect(component.find('StyledCard').length).toEqual(1)
    expect(component.find('StyledCard').prop('onClick')).toEqual(expect.any(Function))
    expect(component.find('.card-body > div > p').at(0).text()).toEqual('ORD-123-2018')
    expect(component.find('StyledAddress').length).toEqual(1)
    expect(component.find('StyledAddress span').at(0).text()).toEqual('Landwehrstr. 39')
    expect(component.find('StyledAddress span').at(1).text()).toEqual('80336, München')

    component.find('StyledCard').simulate('click')
    setTimeout(() => {
      expect(historyMock.push.mock.calls[0]).toEqual([ '/order-details', order ])
    })
  })

})