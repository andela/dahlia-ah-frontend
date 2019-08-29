import { useEffect } from 'react';
import Materialize from 'materialize-css';

const useAuthenticatedNav = () => useEffect(() => {
  const dropdown = document.querySelector('.dropdown-trigger');
  const notification = document.querySelector('.notification');
  Materialize.Dropdown.init(dropdown);
  Materialize.Dropdown.init(notification);
}, []);

export default useAuthenticatedNav;
