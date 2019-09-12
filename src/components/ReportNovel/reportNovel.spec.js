import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import ReportNovel from './index';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ReportNovel />);
    expect(wrapper).toMatchSnapshot();
  });
});
