import React, { useEffect } from 'react';
import '../style/rockets.css';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketData } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const { rockets, isLoading, error } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketData());
  }, [dispatch]);

  if (isLoading) {
    return <div className="alert-box">Loading data from API...</div>;
  }

  if (error) {
    return <div className="alert-box">{error}</div>;
  }

  return (
    <div className="container">
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id} className="rocket-item">
            <div className="rocket-image-container">
              <img src={rocket.imageRocket} alt="rocket_image" className="rocket-image" key={rocket.id} />
            </div>
            <div className="rocket-description-container">
              <h3 className="rocket-name">{rocket.rocketName}</h3>
              <p className="rocket-description">{rocket.description}</p>
              <button type="button" className="booking-btn">BOOK ROCKET</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rockets;
