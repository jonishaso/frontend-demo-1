import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SearchBox from './index'

test('test Search Form', () => {
  const wrapper = shallow(<SearchBox />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
