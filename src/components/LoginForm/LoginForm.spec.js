import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { renderHook, act } from '@testing-library/react-hooks';

import LoginForm from './LoginForm';
import LoginFormRender from './LoginFormRender';
import {
  emailState, passwordState, errorState, isLoadingState,
} from '../../hooks/Login';

configure({ adapter: new Adapter() });

describe('LoginForm component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <LoginForm isOpen={false} closeModal={() => {}} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
describe('LoginFormRenderer component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <LoginFormRender handleSubmit={() => {}} setEmail={() => {}} email="" setPassword={() => {}} password="" error="" isLoading={false} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TEST FOR LOGIN HOOKS', () => {
  it('should update email', () => {
    const { result } = renderHook(() => emailState(''));
    act(() => {
      result.current.setEmail('eden@gmail.com');
    });

    expect(result.current.email).toBe('eden@gmail.com');
  });
  it('should update password', () => {
    const { result } = renderHook(() => passwordState(''));
    act(() => {
      result.current.setPassword('password');
    });

    expect(result.current.password).toBe('password');
  });
  it('should update error', () => {
    const { result } = renderHook(() => errorState(''));
    act(() => {
      result.current.setError('error');
    });

    expect(result.current.error).toBe('error');
  });
  it('should update isLoading', () => {
    const { result } = renderHook(() => isLoadingState(''));
    expect(result.current.isLoading).toBe(false);
    act(() => {
      result.current.setLoader(true);
    });
    expect(result.current.isLoading).toBe(true);
  });
});
