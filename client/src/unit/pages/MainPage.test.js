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
    expect(wrapper.find('StyledButton').length).toEqual(1)
    expect(wrapper.find('StyledButton').text()).toEqual('search')
    expect(wrapper.find('StyledButton').prop('disabled')).toEqual(true)
    expect(wrapper.find('StyledButton').prop('onClick')).toEqual(expect.any(Function))
  })

  it("validates search", () => {
    const wrapper = shallow(<MainPage />)

    expect(wrapper.find('input').length).toEqual(1)
    expect(wrapper.find('input').prop('value')).toEqual('')
    const form = wrapper.find('input')

    //Wrong format email
    form.props().onChange({target: {
       value: 'myValue'
    }})

    setTimeout(() => {
      expect(wrapper.find('StyledButton').prop('disabled')).toEqual(false)
      wrapper.find('StyledButton').simulate('click')
      expect(wrapper.find('.text-danger').length).toEqual(1)
    })

    //Right format email
    form.props().onChange({target: {
      value: 'test@test.de'
    }})
    const historyMock = { push: jest.fn() }
    setTimeout(() => {
      expect(wrapper.find('StyledButton').prop('disabled')).toEqual(false)
      wrapper.find('StyledButton').simulate('click')
      expect(historyMock.push.mock.calls[0]).toEqual(['/order-history', { email: 'test@test.de' } ])
    })

  })
})