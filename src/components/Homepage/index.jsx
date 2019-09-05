import React from 'react';
import SliderContextProvider from '../../contexts/SliderContext';
import GenreContextProvider from '../../contexts/GenreContext';
import BookSlider from '../BookSlider';
import GenreScroll from '../GenreScroll';
import FeaturedBooks from '../FeaturedBooks';
import './homepage.scss';

const Homepage = () => (
  <div>
    <SliderContextProvider>
      <BookSlider />
    </SliderContextProvider>
    <GenreContextProvider>
      <GenreScroll />
      <section className="start-writing">
        <h3>Share your brilliant ideas</h3>
        <p>This is where your journey begins…</p>
        <a href="#!" className="start-writing-btn">Start Writing</a>
      </section>
      <FeaturedBooks />
    </GenreContextProvider>
  </div>
);

export default Homepage;
