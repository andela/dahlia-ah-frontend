import React from 'react';
import PropTypes from 'prop-types';
import { NovelOfTheWeekContext } from '../../../../context/NovelOfTheWeekContext';

export const mockNovelOfTheWeekProviderContext = {
  novelOfTheWeek: {
    author: 'Alex Parish',
    coverImgUrl: 'https://res.cloudinary.com/drlcfqzym/image/upload/v1567083948/claire-rodahaver-o1Sc5VXglNI-unsplash.jpg',
    createdAt: '2019-09-11T18:20:55.915Z',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum upidatat non proident, sunt in culpa qui officia.',
    genre: 'thriller',
    id: '10d42194-2ea2-4c90-aef2-043421952220',
    isPublished: true,
    slug: 'one-way-trip',
    thumbImgUrl: 'https://pictures.abebooks.com/isbn/9780399203138-us.jpg',
    title: 'one way trip',
    updatedAt: '2019-09-11T18:20:55.915Z',
  },
};

const MockNovelOfTheWeekProvider = ({ children }) => {
  const { Provider } = NovelOfTheWeekContext;
  return (
    <Provider value={{ ...mockNovelOfTheWeekProviderContext }}>
      {children}
    </Provider>
  );
};

MockNovelOfTheWeekProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MockNovelOfTheWeekProvider;
