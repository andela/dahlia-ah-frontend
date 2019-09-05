import { useState } from 'react';

const novelOftheWeekState = () => {
  const [novelOfTheWeek, setNovelOfTheWeek] = useState('');
  return { novelOfTheWeek, setNovelOfTheWeek };
};

export default novelOftheWeekState;
