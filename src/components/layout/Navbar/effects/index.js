import { useEffect } from 'react';
import Materialize from 'materialize-css';

const useNavigation = () => useEffect(() => {
  const sidenav = document.querySelector('.sidenav');
  Materialize.Sidenav.init(sidenav);

  const nav = document.querySelector('.navbar');
  const authNav = document.querySelector('.authenticated-nav');
  let changeNavColor = 'nav-black';
  if (authNav) {
    changeNavColor = 'nav-white';
  }
  document.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll > 10) {
      nav.classList.add('change-nav', `${changeNavColor}`);
    } else {
      nav.classList.remove('change-nav', `${changeNavColor}`);
    }
  });
}, []);

export default useNavigation;
