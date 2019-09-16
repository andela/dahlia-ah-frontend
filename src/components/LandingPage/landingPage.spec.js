import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import LandingPage from './LandingPage';
import AuthModalContextProvider from '../../context/AuthModalContext';

configure({ adapter: new Adapter() });

describe('LandingPage component', () => {
  let wrapper;
  const mockFunction = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <Switch>
          <AuthModalContextProvider>
            <LandingPage />
          </AuthModalContextProvider>
        </Switch>
      </BrowserRouter>,
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Landing page contains a button with Start Writing', () => {
    expect(wrapper.find('button').get(0).props.children).toEqual('Start Writing');
  });

  it('modal opens on clicking start writing', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(mockFunction.mock.calls.length).toEqual(0);
  });

  it('modal opens on clicking membership sign up', () => {
    wrapper.find('.membershipButton').at(1).simulate('click');
    expect(mockFunction.mock.calls.length).toEqual(0);
  });

  it('modal opens on clicking membership subscribe', () => {
    wrapper.find('.membershipButton').at(1).simulate('click');
    expect(mockFunction.mock.calls.length).toEqual(0);
  });
});
