import React from 'react';
import PropTypes from 'prop-types';
import { OtherProfileContext } from '../../../context/OtherProfileContext';


export const mockContext = {
  authorNovels: [
    {
      id: 'b1e32d53-1e1f-4325-a021-7088377a7d22',
      authorId: '122a0d86-8b78-4bb8-b28f-8e5f7811c456',
      genreId: 'ceb59aa0-b10d-4f37-a0d5-925b38876db4',
      slug: 'set-on-fire',
      title: 'Set On Fire',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, repellat? Illum consequuntur, officiis distinctio doloribus voluptate veritatis laudantium perferendis accusamus quibusdam esse autem et nulla excepturi totam sint quis culpa? dapibus sed, pulvinar suscipit magna. Mauris iaculis rutrum ipsum in lobortis. Quisque ullamcorper at odio ac tristique. Vivamus vel risus vitae lorem varius consequat at quis urna',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu ipsum, sagittis eu dapibus sed, pulvinar suscipit magna. Mauris iaculis rutrum ipsum in lobortis. Quisque ullamcorper at odio ac tristique. Vivamus vel risus vitae lorem varius consequat at quis urna.',
      isBanned: false,
      readTime: 1,
      thumbImgUrl:
        'https://res.cloudinary.com/allebd/image/upload/v1567524085/dahlia/forestbookcover.png',
      coverImgUrl:
        'https://res.cloudinary.com/allebd/image/upload/v1567555878/dahlia/back6unsplash.jpg',
      createdAt: '2019-09-09T17:55:52.257Z',
      updatedAt: '2019-09-09T17:55:52.257Z',
      likescount: '0',
      Likes: [],
      Comments: [],
      Genre: {
        name: 'thriller',
      },
    },
    {
      id: 'b1e32d53-1e1f-4325-a021-7088377a7d221',
      authorId: '122a0d86-8b78-4bb8-b28f-8e5f7811c4561',
      genreId: 'ceb59aa0-b10d-4f37-a0d5-925b38876db41',
      slug: 'set-on-fire',
      title: 'Set On Fire',
      description:
        'Officiis distinctio doloribus voluptate veritatis laudantium',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu ipsum, sagittis eu dapibus sed, pulvinar suscipit magna. Mauris iaculis rutrum ipsum in lobortis. Quisque ullamcorper at odio ac tristique. Vivamus vel risus vitae lorem varius consequat at quis urna.',
      isBanned: false,
      readTime: 1,
      thumbImgUrl:
        'https://res.cloudinary.com/allebd/image/upload/v1567524085/dahlia/forestbookcover.png',
      coverImgUrl:
        'https://res.cloudinary.com/allebd/image/upload/v1567555878/dahlia/back6unsplash.jpg',
      createdAt: '2019-09-09T17:55:52.257Z',
      updatedAt: '2019-09-09T17:55:52.257Z',
      likescount: '0',
      Likes: [],
      Comments: [],
      Genre: {
        name: 'thriller',
      },
    },
  ],

  userProfile: {
    name: 'some name',
    bio: 'Bio text',
    image: 'https://some-image.com',
    following: 0,
    followers: 1,
    written: 2,
  },
};

const MockProvider = ({ children }) => {
  const { Provider } = OtherProfileContext;
  return (
    <Provider value={{ ...mockContext }}>
      {children}
    </Provider>
  );
};

MockProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MockProvider;
