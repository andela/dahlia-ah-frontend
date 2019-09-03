import React from 'react';
import { configure, shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import AuthModalContainer from './AuthModalContainer';

configure({ adapter: new Adapter() });

describe('AuthModalContainer component <ResetPassword />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <AuthModalContainer />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders the AuthModal component', () => {
    const wrapper = shallow(
      <AuthModalContainer />,
    );

    expect(wrapper.find('AuthModal')).toHaveLength(1);
  });

  it('sets the display to none when a button is clicked', () => {
    const wrapper = mount(
      <AuthModalContainer isOpen />,
    );

    expect(wrapper.find('.auth-modal-div').get(0).props.style.display).toEqual('flex');
    wrapper.find('.fas').simulate('click');
    expect(wrapper.find('.auth-modal-div').get(0).props.style.display).toEqual('none');
    wrapper.unmount();
  });
});
