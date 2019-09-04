import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Navbar from './index';
import AuthModalContextProvider from '../../../context/AuthModalContext';

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
});
