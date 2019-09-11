import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import GenreScroll from './index';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GenreScroll />);
    expect(wrapper).toMatchSnapshot();
  });
});
