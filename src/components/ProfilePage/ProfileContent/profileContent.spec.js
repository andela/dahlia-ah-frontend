import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProfileContent from './ProfileContent';

configure({ adapter: new Adapter() });

describe('Author Profile/Bio Component', () => {
  const props = {
    name: 'Some Name',
    bio: 'Bio text',
    image: 'https://some-image.com',
    following: 0,
    followers: 1,
    written: 2,
  };
  it('should render properly', () => {
    const wrapper = shallow(
      <ProfileContent
        name={props.name}
        bio={props.bio}
        image={props.image}
        followers={props.followers}
        following={props.following}
        written={props.written}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
