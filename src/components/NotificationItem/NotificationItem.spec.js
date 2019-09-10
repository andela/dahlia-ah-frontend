import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import NotificationItem from './NotificationItem';
import * as notification from '../../api/notification';

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
  const markAsRead = jest.spyOn(notification, 'markAsRead').mockImplementation(() => true);
  beforeEach(() => {
    wrapper = shallow(
      <NotificationItem notification={notifications[0]} notifications={notifications} />,
    );
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('call mark as read once', () => {
    wrapper.find('ul').simulate('click');
    expect(markAsRead.mock.calls.length).toEqual(1);
  });
  it('call mark as read once', () => {
    wrapper.find('ul').simulate('keypress');
    expect(markAsRead.mock.calls.length).toEqual(2);
  });
  it('notification is read', () => {
    const notReadNot = { ...notifications[0], isRead: true };
    wrapper = shallow(
      <NotificationItem notification={notReadNot} notifications={notifications} />,
    );
    expect(wrapper.find('.not-read')).toHaveLength(0);
  });
  it('notification is not read', () => {
    expect(wrapper.find('.not-read')).toHaveLength(1);
  });
});
