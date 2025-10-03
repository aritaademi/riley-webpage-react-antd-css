import './ThirdPage.css';
import cardImg from '../assets/atm-card.png';

const ThirdPage = () => {
  return (
    <div className="giftcard-container">
      <div className="text-content">
        <h1>The Baby Tracker That Gets You</h1>
        <p>
          Riley is the only all-in-one baby tracker that learns your family's unique rhythm to give you confidence and physician-backed guidance when it matters most.
        </p>
        <button className="giftcard-button">Purchase a Gift Card</button>
      </div>
      <div className="card-image">
        <img src={cardImg} alt="Mother's Day Card" />
      </div>
    </div>
  );
};

export default ThirdPage;
