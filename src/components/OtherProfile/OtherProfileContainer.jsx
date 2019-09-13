import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import OtherProfileContextProvider from '../../context/OtherProfileContext';
import OtherProfile from './OtherProfile';

const OtherProfileContainer = ({ match: { params: { userId } } }) => (
  <OtherProfileContextProvider userId={userId}>
    <OtherProfile />
  </OtherProfileContextProvider>
);

OtherProfileContainer.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default OtherProfileContainer;
