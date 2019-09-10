import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';

configure({ adapter: new Adapter() });

describe('Login component', () => {
  const mockCallBack = jest.fn();
  it('renders correctly', () => {
    const wrapper = shallow(
      <Login openModal={() => {}} closeModal={() => {}} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('test for open modal event', () => {
    const wrapper = shallow(
      <Login openModal={mockCallBack} closeModal={() => {}} />,
    );
    wrapper.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
