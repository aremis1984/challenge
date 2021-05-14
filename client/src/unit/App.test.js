import React from 'react'
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom'

import App from '../App'
import { MainPage, OrdersListPage, OrdersDetailsPage } from '../pages'

describe('App', () => {
  it("renders App loader", () => {
    shallow(<App />)
  })
  
  it("renders routers", () => {
    const wrapper = shallow(<App />)
    const main = <Route path="/" component={MainPage} exact={true} />
    const list = <Route path="/order-history" component={OrdersListPage} />
    const details = <Route path="/order-details" component={OrdersDetailsPage} />

    expect(wrapper.contains(main)).toEqual(true)
    expect(wrapper.contains(list)).toEqual(true)
    expect(wrapper.contains(details)).toEqual(true)
  })
})