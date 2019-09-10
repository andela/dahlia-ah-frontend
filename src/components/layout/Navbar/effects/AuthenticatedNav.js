import { useEffect } from 'react';
import Materialize from 'materialize-css';

const useAuthenticatedNav = () => useEffect(() => {
  const dropdown = document.querySelector('.dropdown-trigger');
  Materialize.Dropdown.init(dropdown);
}, []);

export default useAuthenticatedNav;
