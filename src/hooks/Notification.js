import { useState } from 'react';

export default () => {
  const [notifications, setNotification] = useState([]);

  return { notifications, setNotification };
};
