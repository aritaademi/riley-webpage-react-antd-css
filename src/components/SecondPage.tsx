import React from 'react';
import { Card, Row, Col } from 'antd';
import './SecondPage.css';
import robotIcon from '../assets/robot.png';
import starIcon from '../assets/smiling-face.png';
import heartIcon from '../assets/emoji.png';
import booksIcon from '../assets/stack-of-books.png';
import phoneImage from '../assets/smartphone.png';

// Define props interface for the card
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

// Inline reusable card component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, bgColor }) => {
  return (
    <Card className="feature-card" style={{ backgroundColor: bgColor }}>
      <img src={icon} alt="icon" className="card-icon" />
      <h2>{title}</h2>
      <p>{description}</p>
    </Card>
  );
};

const SecondPage: React.FC = () => {
  return (
    <div className="second-page">
      <Row gutter={32} justify="center">
        {/* Left Column: Robot + Star */}
        <Col xs={24} md={6}>
          <FeatureCard
            icon={robotIcon}
            title="Predictive Sleep & Feeding Schedules"
            description="No more mental math - Riley will tell you exactly when to feed your baby and put them down to sleep."
            bgColor="#FFF4B3"
          />
          <FeatureCard
            icon={starIcon}
            title="Personalized Parenting, Powered by You"
            description="Riley’s thorough onboarding allows it to tailor answers to your baby and family, so you can skip the 3am panic Googling."
            bgColor="#D6F8CF"
          />
        </Col>

        {/* Center Column: Phone */}
        <Col xs={24} md={8} className="phone-col">
          <img src={phoneImage} alt="Phone" className="phone-image" />
        </Col>

        {/* Right Column: Books + Heart */}
        <Col xs={24} md={6}>
          <FeatureCard
            icon={booksIcon}
            title="Your Parenting Toolbox, All In One Place"
            description="Juggling 5 different apps for one baby? With Riley you can manage sleep, feeding, growth, development and more - all in one place."
            bgColor="#D3EAFF"
          />
          <FeatureCard
            icon={heartIcon}
            title="24/7 Support, Any Time, Anywhere"
            description="Riley delivers instant, expert answers to all of your parenting questions, day or night."
            bgColor="#E9D6FC"
          />
        </Col>
      </Row>
    </div>
  );
};

export default SecondPage;
