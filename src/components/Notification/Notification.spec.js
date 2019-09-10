import React from 'react';
import { configure, shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Adapter from 'enzyme-adapter-react-16';
import appConfig from '../../config/appConfig';
import Notification from './Notification';
import NotificationItem from '../NotificationItem/NotificationItem';
import notificationState from '../../hooks/Notification';
import * as notificationApiCalls from '../../api/notification';

const { markAsRead } = notificationApiCalls;

const { BACKEND_PATH } = appConfig;

configure({ adapter: new Adapter() });

describe('Notification component', () => {
  let wrapper;
  const notifications = [{
    actor: 'Benjamin',
    message: 'hey',
    novelTitle: 'hello',
    novelUrl: 'test',
    createdAt: '2019-09-09T15:33:29.251Z',
    isRead: false,
  }];
  const mockCallBack = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <Notification markAllAsRead={mockCallBack} notifications={notifications} />,
    );
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders should have a span with text Notification', () => {
    expect(wrapper.find('span').text()).toContain('Notification');
  });
  it('renders only one notification item', () => {
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
  });
  it('renders only one notification item', () => {
    wrapper = shallow(
      <Notification markAllAsRead={mockCallBack} notifications={[]} />,
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(0);
  });
  it('call mark all as read once', () => {
    wrapper.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
describe('TEST FOR Notification HOOKS', () => {
  it('should update email', () => {
    const { result } = renderHook(() => notificationState([]));
    act(() => {
      result.current.setNotification([{
        actor: 'Benjamin',
        message: 'hey',
        novelTitle: 'hello',
        novelUrl: 'test',
        createdAt: '2019-09-09T15:33:29.251Z',
        isRead: false,
      }]);
    });

    expect(result.current.notifications).toHaveLength(1);
  });
});

describe('TEST API CALLS RESPONSE', () => {
  it('update state after read', () => {
    const { result } = renderHook(() => notificationState([]));
    act(() => {
      result.current.setNotification([{
        actor: 'Benjamin',
        message: 'hey',
        novelTitle: 'hello',
        novelUrl: 'test',
        createdAt: '2019-09-09T15:33:29.251Z',
        isRead: false,
      }]);
    });
    const mock = new MockAdapter(axios);
    const url = `${BACKEND_PATH}/notification`;
    mock.onAny(url).reply(() => {
      act(() => {
        result.current.setNotification([{
          actor: 'Benjamin',
          message: 'hey',
          novelTitle: 'hello',
          novelUrl: 'test',
          createdAt: '2019-09-09T15:33:29.251Z',
          isRead: true,
        }]);
      });
    });
    markAsRead(0, result.current.notifications, result.current.setNotification);

    expect(result.current.notifications[0].isRead).toBe(false);
  });
});
