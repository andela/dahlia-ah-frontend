import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import NotFound from './NotFound';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Switch>
          <NotFound />
        </Switch>
      </BrowserRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
