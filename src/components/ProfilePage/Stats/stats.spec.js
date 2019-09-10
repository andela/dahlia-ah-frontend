import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Stats from './Stats';

configure({ adapter: new Adapter() });

describe('Author Stats Component', () => {
  const props = {
    followers: 0,
    following: 1,
    written: 2,
  };
  it('should render properly', () => {
    const wrapper = shallow(
      <Stats
        followers={props.followers}
        following={props.following}
        written={props.written}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
