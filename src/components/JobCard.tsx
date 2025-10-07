import React from 'react';
import './JobCard.css';

interface JobCardProps {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string;
  timePosted: string;
  applicants: number;
  promoted?: string;
}

const JobCard: React.FC<JobCardProps> = ({
  companyLogo,
  jobTitle,
  companyName,
  location,
  timePosted,
  applicants,
  promoted,
}) => {
  return (
    <div className="job-card">
      {promoted && <p className='promoted'>{promoted}</p>}
      <div className="job-card-header">
        <img 
          src={companyLogo} 
          alt={`${companyName} Logo`} 
          className="company-logo" 
          loading="lazy"
          decoding="async"
        />
        <div className="job-info">
          <h3 className="job-title">{jobTitle}</h3>
          <p className="company-name">{companyName}</p>
        </div>
      </div>

      <div className="job-card-details">
        <div className="detail-item">
          <img 
            src="/src/assets/Vector (1).png" 
            alt="Location" 
            className="detail-icon" 
            loading="lazy"
            decoding="async"
          />
          <span>{location}</span>
        </div>
        <div className="detail-item">
          <img 
            src="/src/assets/Vector.png" 
            alt="Time" 
            className="detail-icon" 
            loading="lazy"
            decoding="async"
          />
          <span>{timePosted} |<span className='color'> {applicants}applicants</span></span>
        </div>
      </div>

      <div className="job-card-actions">
        <button className="apply-now-btn">Apply Now</button>
        <button className="bookmark-btn">
          <img 
            src="/src/assets/Vector (2).png" 
            alt="Bookmark" 
            className="bookmark-icon" 
            loading="lazy"
            decoding="async"
          />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
