import React from 'react';

import './ReadNovel.scss';

const ReadNovel = () => (
  <div className="read-novel">
  <div id="cover" className="cover">
    <div>
      <img src="https://res.cloudinary.com/dppmnzbtx/image/upload/v1568033691/fantasy-4351128_1920.png" alt="novel cover" />
    </div>
    <div className="read-novel-cover">
      <span className="genre-color">Thriller</span>
      <h2 className="text-cover">The man behind the mask</h2>
      <p className="p-text">Updated at 10:32AM, Feb 21, 2019</p>
      <div className="div-text">
        <span className="span-text"><i className="far fa-user" style={{ fontSize: '24px' }}><small>Alesh Parish</small></i></span>
        <span className="span-text"><i className="far fa-clock" style={{ fontSize: '24px' }}><small>5mins read</small></i></span>
        <span className="span-text"><i className="far fa-heart" style={{ fontSize: '24px' }}><small>2345</small></i></span>
      </div>
    </div>
    <div className="div-content">
      <main className="main-content">
        <p className="p-heading">Home > Thriller > The man behinf the mask</p>
        <h3 className="chapter">Introduction</h3>
        <p className="text-content">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
          graphic or web designs. The passage is attributed to an unknown typesetter in the 15th cffg
          who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use 
          specimen book. It usually begins with:

          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntg
          et dolore magna aliqua.”
          The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragrapgjh
          etc.) that doesnt distract from the layout. A practice not without controversy, laying outbh 
          meaningless filler text can be very useful when the focus is meant to be on design, not conh

          The passage experienced a surge in popularity during the 1960s when Letraset used it on thegjkh
          transfer sheets, and again during the 90s as desktop publishers bundled the text with theirgfhfdfsew
          Today it's seen all around the web; on templates, websites, and stock designs. Use our generfgre
          your own, or read on for the authoritative history of lorem ipsum.
        </p>
        <p className="text-content">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
          graphic or web designs. The passage is attributed to an unknown typesetter in the 15th cffg
          who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use 
          specimen book. It usually begins with:

          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntg
          et dolore magna aliqua.”
          The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragrapgjh
          etc.) that doesnt distract from the layout. A practice not without controversy, laying outbh 
          meaningless filler text can be very useful when the focus is meant to be on design, not conh

          The passage experienced a surge in popularity during the 1960s when Letraset used it on thegjkh
          transfer sheets, and again during the 90s as desktop publishers bundled the text with theirgfhfdfsew
          Today it's seen all around the web; on templates, websites, and stock designs. Use our generfgre
          your own, or read on for the authoritative history of lorem ipsum.
        </p>
        <h3 className="chapter">Chapter 1</h3>
        <p className="text-content">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
          graphic or web designs. The passage is attributed to an unknown typesetter in the 15th cffg
          who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use 
          specimen book. It usually begins with:

          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntg
          et dolore magna aliqua.”
          The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragrapgjh
          etc.) that doesnt distract from the layout. A practice not without controversy, laying outbh 
          meaningless filler text can be very useful when the focus is meant to be on design, not conh

          The passage experienced a surge in popularity during the 1960s when Letraset used it on thegjkh
          transfer sheets, and again during the 90s as desktop publishers bundled the text with theirgfhfdfsew
          Today it's seen all around the web; on templates, websites, and stock designs. Use our generfgre
          your own, or read on for the authoritative history of lorem ipsum.

          The passage experienced a surge in popularity during the 1960s when Letraset used it on thegjkh
          transfer sheets, and again during the 90s as desktop publishers bundled the text with theirgfhfdfsew
          Today it's seen all around the web; on templates, websites, and stock designs. Use our generfgre
          your own, or read on for the authoritative history of lorem ipsum.
        </p>
      </main>
  
      <sidebar className="side-content">
        <form>
          <div className="row">
            <div className="input-field suffix col s6">
              <input id="icon_prefix" type="text" className="validate" />
              <label for="icon_prefix">Search...</label>
              <i class="fas fa-search"></i>
            </div>
          </div>
        <div className="advert">
          <div className="advert-here">Advertise Here</div>
        </div>
        <div className="novels">
          <div className="similar-novels">
            <h5>Similar Novels</h5>
            <div className="filter-div"><p className="filter">Jurassic Park</p></div>
            <div className="filter-div"><p className="filter">The Davinci Code</p></div>
            <div className="filter-div"><p className="filter">The Girl On The Train</p></div>
            <div className="filter-div"><p className="filter">In a Dark, Dark Wood</p></div>
            <div className="filter-div"><p className="filter">Gone Girl</p></div>
            <div className="filter-div"><p className="filter">The Fast and Furious</p></div>
          </div>
        </div>
        <div className="genre-div">
          <h5 className="genre-heading">Genres</h5>
          <div className="genres">
             <div className="sub sub-genres1">Thriller</div>
             <div className="sub sub-genres2">Action</div>
             <div className="sub sub-genres3">Comedy</div>
             <div className="sub sub-genres4">Romance</div>
             <div className="sub sub-genres5">Sci-Fi</div>
             <div className="sub sub-genres6">Epic</div>
          </div>
        </div>
        </form>
      </sidebar><br/><br/>
      <div className="other-novels-div">
      <div><h1 className="heading-novel">Other Novels By Shaun</h1></div>
          <div className="other-novels">
            <div className="image-container"><img src="https://res.cloudinary.com/dppmnzbtx/image/upload/v1568117306/abstract-trendy-book-cover-design-violet-rays-pattern-applicable-for-M12N71.png" alt="image 1"  className="novel-image" style={{ width: '120px' }}/>
            <div className="read">Read</div>
            </div>
            <div  className="image-container"><img src="https://res.cloudinary.com/dppmnzbtx/image/upload/v1568117297/Enchantment-Book-Cover-Best-Seller1_1.png" alt="image 2"  className="novel-image" style={{ width: '120px' }}/>
            <div className="read">Read</div>
            </div>
            <div  className="image-container"><img src="https://res.cloudinary.com/dppmnzbtx/image/upload/v1568117301/art_bookcover.png" alt="image 3"  className="novel-image" style={{ width: '120px' }}/>
            <div className="read">Read</div>
            </div>
            <div  className="image-container"><img src="https://res.cloudinary.com/dppmnzbtx/image/upload/v1568117292/abstract-trendy-book-cover-design-violet-rays-pattern-applicable-for-M12N71_1.png" alt="image 4"  className="novel-image" style={{ width: '120px' }}/>
            <div className="read">Read</div>
            </div>
            <div  className="image-container"><img src="https://res.cloudinary.com/dppmnzbtx/image/upload/v1568117297/Enchantment-Book-Cover-Best-Seller1_1.png" alt="image 5"  className="novel-image" style={{ width: '120px' }}/>
            <div className="read">Read</div>
            </div>
            <div  className="image-container"><img src="https://res.cloudinary.com/dppmnzbtx/image/upload/v1568117286/art_bookcover_1.png" alt="image 6"  className="novel-image" style={{ width: '120px' }}/>
            <div className="read">Read</div><br/><br/>
            </div>
          </div>
        </div>
        <div className="btn-button">
          <button className="btn-view">View More</button>
        </div>
    </div>
  </div>
  </div>
);

export default ReadNovel;
