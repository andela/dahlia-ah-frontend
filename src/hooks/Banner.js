import { useState } from 'react';

const bannerState = () => {
  const [banner, setBanner] = useState('');
  return { banner, setBanner };
};

export default bannerState;
