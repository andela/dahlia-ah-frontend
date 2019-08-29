import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';

configure({ adapter: new Adapter() });

describe('Login component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Login isOpen={false} closeModal={() => {}} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
