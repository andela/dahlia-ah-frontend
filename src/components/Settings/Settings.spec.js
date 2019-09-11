import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Settings from './Settings';

configure({ adapter: new Adapter() });

describe('Settings component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Settings />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
