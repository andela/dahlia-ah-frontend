import React from 'react';
import sinon from 'sinon';
import { configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import TextInput from './TextInput';

configure({ adapter: new Adapter() });

describe('TextInput component <TextInput />', () => {
  const formField = {
    name: 'Email',
    id: 1,
    value: '',
    errorMessage: null,
  };

  it('renders correctly', () => {
    const wrapper = mount(
      <TextInput formField={formField} index={0} />,
    );

    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('has an input element with class text-input with correct attributes', () => {
    const wrapper = mount(
      <TextInput formField={formField} index={0} />,
    );
    expect(wrapper.find('.text-input').get(0).props.type).toEqual('text');
    expect(wrapper.find('.text-input').get(0).props.placeholder).toEqual(formField.name);
    expect(wrapper.find('.text-input').get(0).props.value).toEqual(formField.value);
    wrapper.unmount();
  });

  it('should fire onChange function when a change happens on input', () => {
    const onChange = sinon.spy();
    const wrapper = mount(
      <TextInput formField={formField} index={0} onChange={onChange} />,
    );
    wrapper.find('input').simulate('change');
    expect(onChange).toHaveProperty('callCount', 1);
    wrapper.unmount();
  });

  it('renders a p element with an error message if thers is an error message', () => {
    const errorMessage = 'invalid input';
    const wrapper = mount(
      <TextInput formField={{ ...formField, errorMessage }} index={0} />,
    );
    expect(wrapper.find('.validation-error').get(0).props.children).toEqual(errorMessage);
    wrapper.unmount();
  });
});
