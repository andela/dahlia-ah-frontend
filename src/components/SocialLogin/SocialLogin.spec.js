import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import SocialLogin from './SocialLogin';

configure({ adapter: new Adapter() });

describe('Social Login component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SocialLogin />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
