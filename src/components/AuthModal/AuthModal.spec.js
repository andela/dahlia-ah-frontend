import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import AuthModal from './AuthModal';

configure({ adapter: new Adapter() });

describe('AuthModal component <AuthModal />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <AuthModal />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders the auth-modal-div as flex when display is true', () => {
    const wrapper = shallow(
      <AuthModal display />,
    );

    expect(wrapper.find('.auth-modal-div').get(0).props.style.display).toEqual('flex');
  });
});
