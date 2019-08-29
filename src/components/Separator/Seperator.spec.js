import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Separator from './Separator';

configure({ adapter: new Adapter() });

describe('Seperator component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Separator />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
