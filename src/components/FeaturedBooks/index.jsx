import React, { useState } from 'react';
import './featuredBooks.scss';
import { GenreContext } from '../../contexts/GenreContext';

const FeaturedBooks = () => {
  const [load, setLoad] = useState(3);
  let loaded = 0;

  return (
    <GenreContext.Consumer>
      {(context) => {
        if (context.genres.length > 0) {
          return (
            <section className="featured-books">
              <h2>
                Featured Books
              </h2>
              {
                context.genres.map((genre) => {
                  if (genre.novels.length >= 3 && loaded < load) {
                    loaded += 1;
                    return (
                      <div className="genre-books" key={genre.id}>
                        <div className="genre-image">
                          <img src={genre.coverImgUrl} alt="genre" />
                        </div>
                        <div className="genre-details">
                          <h3>{genre.name}</h3>
                          <p>
                            {genre.description}
                          </p>
                          <div className="novels">
                            {
                              genre.novels.map((novel, index) => {
                                if (index < 3) {
                                  return (
                                    <div className="novel" key={novel.id}>
                                      <div className="novel-image">
                                        <img src={novel.thumbImgUrl} alt="novel" />
                                      </div>
                                      <a href="#!" className="read-btn btn">Read</a>
                                    </div>
                                  );
                                }
                                return false;
                              })
                            }
                          </div>
                          <a href="#!" className="view-more-btn btn">View More</a>
                        </div>
                      </div>
                    );
                  }
                  return false;
                })
              }
              {load === loaded
                ? (
                  <button
                    type="button"
                    className="btn load-more-btn"
                    onClick={() => {
                      const loadMore = load + 1;
                      setLoad(loadMore);
                    }}
                  >
                    Load more
                    <span>
                      <img
                        src="https://img.icons8.com/ios/20/000000/expand-arrow--v1.png"
                        alt="dropdown"
                      />
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn load-more-btn"
                    onClick={() => {
                      document.documentElement.scrollTop = 0;
                    }}
                  >
                    <span>
                      <img
                        src="https://img.icons8.com/ios/20/000000/collapse-arrow--v2.png"
                        alt="scrool up"
                      />
                    </span>
                    Scroll to top
                  </button>
                )}
            </section>
          );
        }
        return (
          <div className="genre-books">
            <div className="genre-image">
              <img src="https://res.cloudinary.com/drlcfqzym/image/upload/v1567430623/asaf-r-d1FZlcQM9uE-unsplash.png" alt="genre" />
            </div>
            <div className="genre-details">
              <h3>Fantasy</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo
              </p>
              <div className="novels">
                <div className="novel">
                  <div className="novel-image">
                    <img src="https://res.cloudinary.com/drlcfqzym/image/upload/v1567431025/art_bookcover.png" alt="novel" />
                  </div>
                  <a href="#!" className="read-btn btn">Read</a>
                </div>
                <div className="novel">
                  <div className="novel-image">
                    <img src="https://res.cloudinary.com/drlcfqzym/image/upload/v1567431025/art_bookcover.png" alt="novel" />
                  </div>
                  <a href="#!" className="read-btn btn">Read</a>
                </div>
                <div className="novel">
                  <div className="novel-image">
                    <img src="https://res.cloudinary.com/drlcfqzym/image/upload/v1567431025/art_bookcover.png" alt="novel" />
                  </div>
                  <a href="#!" className="read-btn btn">Read</a>
                </div>
              </div>
              <a href="#!" className="view-more-btn btn">View More</a>
            </div>
          </div>
        );
      }}
    </GenreContext.Consumer>
  );
};

export default FeaturedBooks;
