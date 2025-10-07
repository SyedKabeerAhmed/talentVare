import React from 'react';
import './ProfileCard.css';
import { FaChevronDown } from 'react-icons/fa';
import profileImage from '../assets/Oval.webp';
import cardBackgroundImage from '../assets/Rectangle 18369.webp';

const ProfileCard: React.FC = () => {
  const stats = [
    { label: "Profile Visitors", value: 140 },
    { label: "Resume Viewers", value: 20 },
    { label: "My Jobs", value: 88 },
  ];

  return (
    <div className="profile-card-container">
      <div className='Card'>
        <div className='Card-img'>
          <img 
            src={cardBackgroundImage} 
            alt="Profile card background" 
            className="card-background-img"
            fetchPriority="high"
            loading="eager"
          />
        </div>
        <div className='sub-card'>
          <img 
            src={profileImage} 
            className='subcard-img' 
            alt="Albert Flores" 
            loading="lazy"
            decoding="async"
          />
          <h2>Albert Flores</h2>
          <p>Senior Product Designer | UI/UX <br /> Designer | Graphic Designer | Web...</p>
          <p className='location'>Clinton, Maryland</p>
        </div>
      </div>

      <div className="stats-card">
        {stats.map((item, index) => (
          <div key={index} className="stats-row">
            <span className="stats-label">{item.label}</span>
            <span className="stats-value">{item.value}</span>
          </div>
        ))}
      </div>


      <div className="calendar-card">
      <div className="calendar-header">
        <div>
          <h3 className="calendar-title">My calendar</h3>
          <p className="calendar-subtitle">Upcoming Interviews</p>
        </div>
        <FaChevronDown className="calendar-icon" />
      </div>
    </div>
    </div>
  );
};

export default ProfileCard;
