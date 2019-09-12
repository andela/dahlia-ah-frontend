import React from 'react';
import { configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import NovelOfTheWeek from './NovelOfTheWeek';
import MockNovelOfTheWeekProvider from './__mocks__/MockNovelOfTheWeekProvider';

configure({ adapter: new Adapter() });

describe('NovelOfTheWeek component', () => {
  let wrapper;
  const mockFunction = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <MockNovelOfTheWeekProvider>
        <NovelOfTheWeek openModal={() => {}} />
      </MockNovelOfTheWeekProvider>,
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('modal opens on clicking novel of the week image', () => {
    wrapper.find('.weekNovelImage').simulate('click');
    expect(mockFunction.mock.calls.length).toEqual(0);
  });

  it('modal opens on clicking novel of the week title', () => {
    wrapper.find('h3').simulate('click');
    expect(mockFunction.mock.calls.length).toEqual(0);
  });

  it('modal opens on clicking see more button', () => {
    wrapper.find('button').simulate('click');
    expect(mockFunction.mock.calls.length).toEqual(0);
  });
});
