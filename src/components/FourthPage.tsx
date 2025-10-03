import React, { useEffect, useState } from 'react';
import { Card, Button, Rate } from 'antd';
import './FourthPage.css';
import quotes from '../assets/quote.png';
import holly from '../assets/holly.png';
import alex from '../assets/alex.png';
import sebastian from '../assets/sebastian.png';
import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Holly W.',
    text: "Riley feels like a personalized parent companion that will grow with my child. It offers tailored advice, activities, and resources that make navigating the challenges of parenthood so much easier.",
    image: holly
  },
  {
    id: 2,
    name: 'Alex G.',
    text: "Riley is such an amazing tool for managing our family life. From activity ideas, tracking feedings, and answers backed by data - Riley just plugs into my life as a parent. It’s like having a parenting assistant right at my fingertips!",
    image: alex
  },
  {
    id: 3,
    name: 'Sebastian M.',
    text: "Riley is like having a best friend with a PhD in child development who remembers what’s important to me and helps me effectively parent my kiddo. I can’t imagine parenting without it - and the personalized guidance is amazing.",
    image: sebastian
  },
];

const FourthPage: React.FC = () => {
  
  const [visible, setVisible] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLDivElement | null>(null);


  // //for the animation 
  // useEffect(() => {
  //   //_ igonre the first argument, use only the second, its parameter destructuring
  //   testimonials.forEach((_, index) => {
  //     //setTimeout for each data, first appears after 500ms, second after 1000ms, third after 1500ms
  //     setTimeout(() => {
  //       setVisible(prev => {
  //         const updated = [...prev];  //make a copy of the array
  //         updated[index] = true;  //set the index to true
  //         return updated;  //return the updated array so the state will be updated
  //       });
  //     }, 500 * (index + 1));
  //   });
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
        if (rect.top <= windowHeight * 0.7) {
          // When section is 70% into the viewport, trigger animation
          testimonials.forEach((_, index) => {
            setTimeout(() => {
              setVisible((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, 500 * (index + 1));
          });
  
          // Remove scroll listener after animation
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    // Run once on mount in case it's already in view
    handleScroll();
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <div className="container" ref={sectionRef}>
      <div className="why-parents-love">
        <h2>Why Parents Love Riley</h2>
        <p className="subtext">
          Join a community of parents like you who get it all done with Riley
        </p>


        <Button
          type="primary"
          shape="round"
          size="large"
          className="join-btn"
        >
          Join the Club
        </Button>

        <div className="card-container">
          {testimonials.map((item, index) =>
            visible[index] ? (
              <Card
                key={item.id}
                className="testimonial-card"
                bordered={false}
              >
                  <img src={quotes} alt="quote" className='quote-icon' />
                  <p>{item.text}</p>
                  <div className="rate">
                      <Rate disabled defaultValue={5} />
                  </div>
                  
                  <div className="profile-info">
                      <img src={item.image} alt="" className='profile-pic' />
                      <span className='profile-name'>{item.name}</span>
                  </div>

              </Card>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
