import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { configure, mount, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Navbar from './index';
import AuthModalContextProvider from '../../../context/AuthModalContext';
import AuthenticatedNav from './AuthenticatedNav';
import UnauthenticatedNav from './UnauthenticatedNav';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Switch>
          <AuthModalContextProvider>
            <Navbar />
          </AuthModalContextProvider>
        </Switch>
      </BrowserRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<AuthenticatedNav />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(
      <AuthModalContextProvider>
        <UnauthenticatedNav />
      </AuthModalContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
