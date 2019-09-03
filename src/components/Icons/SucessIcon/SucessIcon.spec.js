import React from 'react';
import { configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import SucessIcon from './SuccessIcon';

configure({ adapter: new Adapter() });

describe('SucessIcon component <SucessIcon />', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <SucessIcon />,
    );

    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('has an image with the correct class and alt and src attributes ', () => {
    const wrapper = mount(
      <SucessIcon />,
    );

    expect(wrapper.find('.success-icon')).toHaveLength(1);
    expect(wrapper.find('.success-icon').get(0).props.alt).toEqual('success icon');
    expect(wrapper.find('.success-icon').get(0).props.src).toBeDefined();
    wrapper.unmount();
  });
});
