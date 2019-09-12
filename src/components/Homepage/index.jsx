import React from 'react';
import { withRouter } from 'react-router-dom';
import SliderContextProvider from '../../contexts/SliderContext';
import BookSlider from '../BookSlider';
import GenreScroll from '../GenreScroll';
import FeaturedBooks from '../FeaturedBooks';
import './homepage.scss';


const Homepage = ({ history }) => {
  const readNovel = (novelSlug) => {
    history.push(`/read-novel/${novelSlug}`);
  }
  return (
  <div>
    <SliderContextProvider>
      <BookSlider readNovel={readNovel}/>
    </SliderContextProvider>
    <GenreScroll />
    <section className="start-writing">
      <h3>Share your brilliant ideas</h3>
      <p>This is where your journey begins…</p>
      <a href="#!" className="start-writing-btn">Start Writing</a>
    </section>
    <FeaturedBooks />
  </div>
)};

export default withRouter(Homepage);
