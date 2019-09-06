import React from 'react';
import sinon from 'sinon';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import ForgotPassword from './ForgotPassword';

configure({ adapter: new Adapter() });

describe('Forgot password component <ForgotPassword />', () => {
  const formFields = [{
    name: 'Email',
    id: 1,
    value: '',
    errorMessage: null,
  }];

  it('renders correctly', () => {
    const wrapper = shallow(
      <ForgotPassword formFields={formFields} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('has the AuthModalContainer component', () => {
    const wrapper = shallow(
      <ForgotPassword formFields={formFields} />,
    );

    expect(wrapper.find('AuthModalContainer')).toHaveLength(1);
  });

  it('has form with a button with a \'SEND\' value', () => {
    const wrapper = shallow(
      <ForgotPassword formFields={formFields} />,
    );

    expect(wrapper.find('.forgot-password-form')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').get(0).props.children).toEqual('SEND');
  });

  it('should fire onSubmit function when the form is submitted', () => {
    const onSubmit = sinon.spy();
    const wrapper = shallow(
      <ForgotPassword formFields={formFields} onSubmit={onSubmit} />,
    );
    wrapper.find('form').simulate('submit');
    expect(onSubmit).toHaveProperty('callCount', 1);
  });

  it('renders the SucessIcon component when ajaxStatus is true', () => {
    const wrapper = shallow(
      <ForgotPassword formFields={formFields} ajaxSuccess />,
    );

    expect(wrapper.find('SuccessIcon')).toHaveLength(1);
  });

  it('renders a validation error paragraph when ajaxError is true', () => {
    const failureMessage = 'not found';

    const wrapper = shallow(
      <ForgotPassword formFields={formFields} ajaxError failureMessage={failureMessage} />,
    );

    expect(wrapper.find('.validation-error')).toHaveLength(1);
    expect(wrapper.find('.validation-error').get(0).props.children).toEqual(failureMessage);
  });

  it('renders a loader icon when ajaxLoading is true', () => {
    const wrapper = shallow(
      <ForgotPassword formFields={formFields} ajaxLoading />,
    );

    expect(wrapper.find('.loader')).toHaveLength(1);
  });
});
