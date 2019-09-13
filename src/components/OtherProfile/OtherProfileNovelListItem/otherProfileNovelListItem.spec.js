import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OtherProfileNovelListItem from './OtherProfileNovelListItem';

configure({ adapter: new Adapter() });

describe('Novel-list Component', () => {
  const props = {
    title: 'Some text',
    summary: 'Some text',
    thumbImgUrl: 'https://some-image.com',
    likes: 2,
    readTime: '1',
    comments: 3,
    genre: 'action',
  };
  it('should render properly', () => {
    const wrapper = shallow(
      <OtherProfileNovelListItem
        title={props.title}
        summary={props.summary}
        thumbImgUrl={props.thumbImgUrl}
        likes={props.likes}
        readTime={props.readTime}
        comments={props.comments}
        genre={props.genre}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
