import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PageButtons from './index'

test('test Page Buttons', () => {
  const wrapper = shallow(<PageButtons />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
