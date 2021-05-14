import React from 'react'
import { shallow } from 'enzyme'

import { LinkComponent } from '../../components'

describe('LinkComponent', () => {
  it("renders LinkComponent component", () => {
    const component = shallow(
      <LinkComponent
        path='/some-path'
        disabled={false}
        state='some-state'
        text='click me'
      />
    )
    expect(component.prop('to')).toEqual({ pathname: '/some-path', state: 'some-state' })
    expect(component.find('StyledButton').prop('disabled')).toEqual(false)
    expect(component.find('StyledButton').text()).toEqual('click me')
  })

})