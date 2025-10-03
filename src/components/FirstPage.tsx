import React from 'react';
import './FirstPage.css';
import icon1 from '../assets/apple.png';
import icon2 from '../assets/chat-gpt.png';
import icon3 from '../assets/googlemaps.png';
import icon4 from '../assets/huawei.png';
import icon5 from '../assets/twitter.png';
import icon6 from '../assets/unity.png';
import sun from '../assets/sun.png';

const icons: string[] = [icon1, icon2, icon3, icon4, icon5, icon6];

const FirstPage: React.FC = () => {
  return (
    <div className="first-page">
      <div className="background-image" />

      <div className="nav-links">
        <a href="#second">Second-Page</a>
        <a href="#third">Third-Page</a>
        <a href="#fourth">Fourth-Page</a>
        <a href="#fifth">Fifth-Page</a>
        <a href="#sixth">Sixth-Page</a>
      </div>


      <div className="content">
        <h1>Your smart<br />parenting<br />companion</h1>
        <p>
          From newborn to toddler and beyond. Sleep tips, daily planners,
          and content that grows with your family.
        </p>
        <button className="get-started-btn">Get Started</button>
      </div>

      <div className="sun-icon">
        <img src={sun} alt="sun icon" className='sun-icon-img' />
      </div>

      {/* <div className="icons">
        {icons.map((src, index) => (
          <img key={index} src={src} className="company-icons" alt={`icon-${index + 1}`} />
        ))}
      </div> */}
      <div className="icons">
        <div className="icons-slide">
          {icons.map((src, index) => (
            <img key={`slide1-${index}`} src={src} className="company-icons"  />
          ))}
          {icons.map((src, index) => (
            <img key={`slide2-${index}`} src={src} className="company-icons"  />
          ))}
          {icons.map((src, index) => (
            <img key={`slide3-${index}`} src={src} className="company-icons"  />
          ))}
          {icons.map((src, index) => (
            <img key={`slide4-${index}`} src={src} className="company-icons"  />
          ))}
        </div>
      </div>

    </div>
  );
};

export default FirstPage;
