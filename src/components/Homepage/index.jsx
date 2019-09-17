import React from 'react';
import { Link } from 'react-router-dom';
import SliderContextProvider from '../../contexts/SliderContext';
import BookSlider from '../BookSlider';
import GenreScroll from '../GenreScroll';
import FeaturedBooks from '../FeaturedBooks';
import './homepage.scss';

const Homepage = () => (
  <div>
    <SliderContextProvider>
      <BookSlider />
    </SliderContextProvider>
    <GenreScroll />
    <section className="start-writing">
      <h3>Share your brilliant ideas</h3>
      <p>This is where your journey begins…</p>
      <Link
        to={{
          pathname: '/write-novel',
        }}
        className="start-writing-btn"
      >
      Start Writing
      </Link>
    </section>
    <FeaturedBooks />
  </div>
);

export default Homepage;
