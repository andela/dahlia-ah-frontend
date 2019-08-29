import React from 'react';
import Navbar from '../layout/Navbar';
import BookSlider from '../BookSlider';
import GenreScroll from '../GenreScroll';
import './homepage.scss';

const Homepage = () => (
  <div>
    <Navbar />
    <BookSlider />
    <GenreScroll />
    <section className="start-writing">
      <h3>Share your brilliant ideas</h3>
      <p>This is where your journey begins…</p>
      <a href="#!" className="start-writing-btn">Start Writing</a>
    </section>
  </div>
);

export default Homepage;
