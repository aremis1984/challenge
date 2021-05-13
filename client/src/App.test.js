import React from 'react';
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom'
import apis from './api'

import App from './App'
import { MainPage, OrdersListPage, OrdersDetailsPage } from './pages'

const tracking = [
  {
    "orderNo": "ORD-123-2018",
    "tracking_number": "00340000161200000001",
    "courier": "DHL",
    "street": "Landwehrstr. 39",
    "zip_code": "80336",
    "city": "München",
    "destination_country_iso3": "DEU",
    "email": "julian@parcellab.com",
    "article_list": [
      {
        "articleNo": "A-C1-L",
        "product_name": "parcelLab Branded Cap",
        "quantity": "2",
        "articleImageUrl": "http://cdn.parcellab.com/img/sales-cannon/parcellab-cap.jpg"
      }
    ],
    "order_details": [
      {
        "tracking_number": "00340000161200000001",
        "location": "",
        "timestamp": "2018-04-06T05:58:00.000Z",
        "status": "Scheduled",
        "status_text": "Delivery date set",
        "status_details": "An appointment to make the delivery has been made. The goods will be delivered on Saturday, Apr 7th, 2018, between 9:30 am and 1:00 pm."
      }
    ]
  },
  {
    "orderNo": "780XX004",
    "tracking_number": "00331612197202003141",
    "courier": "DHL",
    "street": "Schillerstr. 23a",
    "zip_code": "10625",
    "city": "Berlin",
    "destination_country_iso3": "DEU",
    "email": "julian@parcellab.com",
    "article_list": [],
    "order_details": [
      {
        "tracking_number": "00331612197202003141",
        "location": "",
        "timestamp": "2020-03-01T00:00:00.000Z",
        "status": "OrderProcessed",
        "status_text": "Order processed",
        "status_details": "The order has been processed."
      }
    ]
  }
]

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

describe('MainPage', () => {
  it("renders MainPage component", () => {
    shallow(<MainPage />)
  })
  
  it("renders search form", () => {
    const wrapper = shallow(<MainPage />)

    expect(wrapper.find('.card-text').length).toEqual(1)
    expect(wrapper.find('label').length).toEqual(1)
    expect(wrapper.find('label').text()).toEqual('Email')
    expect(wrapper.find('input').length).toEqual(1)
    expect(wrapper.find('LinkComponent').length).toEqual(1)
    expect(wrapper.find('LinkComponent').prop('path')).toEqual('/order-history')
  })

  it("validates search", () => {
    const wrapper = shallow(<MainPage />)

    expect(wrapper.find('input').length).toEqual(1)
    expect(wrapper.find('input').prop('value')).toEqual('')
    const form = wrapper.find('input')
        expect(wrapper.find('LinkComponent').prop('path')).toEqual('/order-history')

    //Wrong format email
    form.props().onChange({target: {
       value: 'myValue'
    }})
    expect(wrapper.find('LinkComponent').prop('disabled')).toEqual(true)

    //Right format email
    form.props().onChange({target: {
      value: 'test@test.de'
    }})
    expect(wrapper.find('LinkComponent').prop('disabled')).toEqual(false)
  })
})

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

describe('OrdersDetailsPage', () => {
const order = {
  "orderNo": "ORD-123-2018",
  "tracking_number": "00340000161200000001",
  "courier": "DHL",
  "street": "Landwehrstr. 39",
  "zip_code": "80336",
  "city": "München",
  "destination_country_iso3": "DEU",
  "email": "julian@parcellab.com",
  "article_list": [
    {
      "articleNo": "A-B2-U",
      "product_name": "parcelLab Tote Bag",
      "quantity": "1",
      "articleImageUrl": "http://cdn.parcellab.com/img/sales-cannon/parcellab-bag.jpg"
    }
  ],
  "order_details": [
    {
      "tracking_number": "00340000161200000001",
      "location": "",
      "timestamp": "2018-04-06T05:58:00.000Z",
      "status": "Scheduled",
      "status_text": "Delivery date set",
      "status_details": "An appointment to make the delivery has been made. The goods will be delivered on Saturday, Apr 7th, 2018, between 9:30 am and 1:00 pm."
    }
  ]
}
  
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