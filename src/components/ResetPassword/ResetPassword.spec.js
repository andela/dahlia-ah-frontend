import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import ResetPassword from './ResetPassword';

configure({ adapter: new Adapter() });

describe('Reset password component <ResetPassword />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ResetPassword />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('form').length).toBe(1);
  });
});
