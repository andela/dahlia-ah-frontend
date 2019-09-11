import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SettingsItem from './SettingsItem';
import * as handleSelected from '../../helpers/handleSelected';

configure({ adapter: new Adapter() });

describe('Settings component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SettingsItem initialState />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('test for submit', () => {
    const mockFunc = jest.spyOn(handleSelected, 'handleSelected').mockImplementation(() => true);
    const wrapper = shallow(
      <SettingsItem />,
    );
    wrapper.find('#on').simulate('click');
    expect(mockFunc.mock.calls.length).toEqual(1);
    wrapper.find('#off').simulate('click');
    expect(mockFunc.mock.calls.length).toEqual(2);
  });
});
