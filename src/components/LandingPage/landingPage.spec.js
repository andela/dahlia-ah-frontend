import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import LandingPage from './LandingPage';
import AuthModalContextProvider from '../../context/AuthModalContext';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Switch>
          <AuthModalContextProvider>
            <LandingPage />
          </AuthModalContextProvider>
        </Switch>
      </BrowserRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
