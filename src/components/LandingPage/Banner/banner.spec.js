import React from 'react';
import { configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Banner from './Banner';
import MockBannerProvider from './__mocks__/MockBannerProvider';

configure({ adapter: new Adapter() });

describe('Banner component', () => {
  let wrapper;
  const mockFunction = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <MockBannerProvider>
        <Banner openModal={() => {}} />
      </MockBannerProvider>,
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('modal opens on clicking section image', () => {
    wrapper.find('section').simulate('click');
    expect(mockFunction.mock.calls.length).toEqual(0);
  });

  it('modal opens on clicking banner title', () => {
    wrapper.find('h2').simulate('click');
    expect(mockFunction.mock.calls.length).toEqual(0);
  });

  it('modal opens on clicking see more button', () => {
    wrapper.find('button').simulate('click');
    expect(mockFunction.mock.calls.length).toEqual(0);
  });
});
