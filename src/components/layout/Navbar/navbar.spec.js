import React from 'react';
import { configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Navbar from './index';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Navbar />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
