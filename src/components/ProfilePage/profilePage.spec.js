import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProfilePage from './ProfilePage';
import MockProvider from './__mocks__/Provider';


configure({ adapter: new Adapter() });

describe('========= Profile Page ============', () => {
  it('should render child components correctly', () => {
    const component = mount(
      <MockProvider>
        <ProfilePage />
      </MockProvider>
      ,
    );

    expect(component).toMatchSnapshot();
  });
});
