import React from 'react';
import PropTypes from 'prop-types';
import { BannerContext } from '../../../../context/BannerContext';

export const mockBannerContext = {
  banner: [
    {
      author: 'James Bond',
      coverImgUrl: 'https://res.cloudinary.com/allebd/image/upload/v1567555883/dahlia/back9unsplash.jpg',
      createdAt: '2019-09-11T18:20:55.915Z',
      description: 'Our journey to higher heights',
      genre: 'thriller',
      id: 'b45bdf8c-a9d5-436c-b2f6-f5c0fa56596a',
      isPublished: true,
      slug: 'higher-and-higher',
      thumbImgUrl: 'https://res.cloudinary.com/allebd/image/upload/v1567524085/dahlia/abstractbookcover.png',
      title: 'Higher and Higher',
      updatedAt: '2019-09-11T18:20:55.915Z',
    },
  ],
};

const MockBannerProvider = ({ children }) => {
  const { Provider } = BannerContext;
  return (
    <Provider value={{ ...mockBannerContext }}>
      {children}
    </Provider>
  );
};

MockBannerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MockBannerProvider;
