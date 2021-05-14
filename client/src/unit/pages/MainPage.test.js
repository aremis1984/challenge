import React from 'react'
import { shallow } from 'enzyme'

import { MainPage } from '../../pages'

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