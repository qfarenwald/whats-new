import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu'

describe('Menu', () => {
  it('should match snapshot with correct data', () => {
    const wrapper = shallow(
      <Menu
        topics={['local', 'entertainment', 'health', 'science', 'technology']}
        selectTopic={jest.fn()}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
})
