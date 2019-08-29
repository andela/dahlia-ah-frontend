/* eslint-disable react/prop-types */
import React from 'react';

const modal = (props) => {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
};

export default modal;
