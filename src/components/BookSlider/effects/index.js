import { useEffect } from 'react';
import Materialize from 'materialize-css';

const useSlider = () => {
  useEffect(() => {
    const slider = document.querySelector('.carousel.carousel-slider');
    const instance = Materialize.Carousel.init(slider, {
      fullWidth: true,
      indicators: true,
    });
    const autoplay = () => {
      instance.next();
    };
    setInterval(autoplay, 5000);
  }, []);
};

export default useSlider;
