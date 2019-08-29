import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import AuthModal from './AuthModal';

configure({ adapter: new Adapter() });

describe('AuthModal component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <AuthModal title="WELCOME BACK" desc="Sign in using your social account" isOpen closeModal={() => { }}>
        <div>Test</div>
      </AuthModal>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
