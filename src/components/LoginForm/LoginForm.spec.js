/* eslint-disable dot-notation */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import appConfig from '../../config/appConfig';
import loginApiCall from '../../api/login';
import LoginForm from './LoginForm';
import LoginFormRender from './LoginFormRender';
import {
  emailState, passwordState, errorState, isLoadingState,
} from '../../hooks/Login';

const { BACKEND_PATH } = appConfig;

configure({ adapter: new Adapter() });

describe('LoginForm component', () => {
  it('renders correctly', () => {
    const mockFunc = jest.fn;
    const wrapper = shallow(
      <LoginForm isOpen={false} closeModal={mockFunc} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
describe('LoginFormRenderer component', () => {
  it('renders correctly', () => {
    const mockFunc = jest.fn;
    const wrapper = shallow(
      <LoginFormRender handleSubmit={mockFunc} setEmail={mockFunc} email="" setPassword={mockFunc} password="" error="" isLoading={false} />,
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

describe('TEST API CALLS RESPONSE', () => {
  it('should return 200 and update localStorage', () => {
    const mock = new MockAdapter(axios);
    const mockData = { data: { user: { token: 'test' } } };
    const url = `${BACKEND_PATH}/auth/login`;
    mock.onPost(url).reply(200, mockData);

    const mockFunc = jest.fn;

    loginApiCall(mockFunc, { push: mockFunc }, mockFunc, mockFunc);
    expect(localStorage.__STORE__['AuthorsHavenUser']).toBe(undefined);
  });
  it('should return 401 and update localStorage', () => {
    const mock = new MockAdapter(axios);
    const mockData = { data: { error: 'error' }, status: 401 };
    const url = `${BACKEND_PATH}/auth/login`;
    mock.onPost(url).reply(401, mockData);
    const mockFunc = jest.fn;

    loginApiCall(mockFunc, { push: mockFunc }, mockFunc, mockFunc);
    expect(localStorage.__STORE__['AuthorsHavenUser']).toBe('');
  });
});
