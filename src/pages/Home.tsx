import React from 'react';
import ProfileCard from '../components/ProfileCard';
import JobCard from '../components/JobCard';
import './Home.css';
import companyLogo from '../assets/Frame 1321315412.webp';
import searchIcon from '../assets/Group 1321315337w.webp';

const Home: React.FC = () => {
  const featuredJobs = [
    {

      id: 1,
      
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'TalentVare',
      location: 'New York, USA',
      timePosted: '1 day ago',
      applicants: 22
    },
    {
      id: 2,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Microsoft',
      location: 'Seattle, USA (Remote)',
      timePosted: '1 days ago',
      applicants: 18
    },
    {
      id: 3,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Google',
      location: 'San Francisco, USA',
      timePosted: '1 days ago',
      applicants: 35
    },
    {
      id: 4,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Amazon',
      location: 'Austin, USA',
      timePosted: '1 day ago',
      applicants: 28
    },
    {
      id: 5,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Apple',
      location: 'Cupertino, USA',
      timePosted: '1 days ago',
      applicants: 15
    }
  ];

  const recommendedJobs = [
    {
      id: 6,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Meta',
      location: 'Menlo Park, USA',
      timePosted: '1 days ago',
      applicants: 42
    },
    {
      id: 7,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Netflix',
      location: 'Los Gatos, USA',
      timePosted: '1 days ago',
      applicants: 31
    },
    {
      id: 8,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Tesla',
      location: 'Palo Alto, USA',
      timePosted: '1 days ago',
      applicants: 25
    },
    {
      id: 9,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Uber',
      location: 'San Francisco, USA',
      timePosted: '1 days ago',
      applicants: 19
    },
    {
      id: 10,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Airbnb',
      location: 'San Francisco, USA',
      timePosted: '1 days ago',
      applicants: 37
    },
    {
      id: 11,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Shopify',
      location: 'Ottawa, Canada',
      timePosted: '1 day ago',
      applicants: 23
    },
    {
      id: 12,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Adobe',
      location: 'San Jose, USA',
      timePosted: '1 days ago',
      applicants: 29
    },
    {
      id: 13,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Spotify',
      location: 'Stockholm, Sweden',
      timePosted: '1 days ago',
      applicants: 21
    },
    {
      id: 14,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Slack',
      location: 'San Francisco, USA',
      timePosted: '1 day ago',
      applicants: 33
    },
    {
      id: 15,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Salesforce',
      location: 'San Francisco, USA',
      timePosted: '1 days ago',
      applicants: 26
    }
  ];

  const latestJobs = [
    {
      id: 16,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Twitter',
      location: 'San Francisco, USA',
      timePosted: '1 day ago',
      applicants: 45
    },
    {
      id: 17,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'LinkedIn',
      location: 'Sunnyvale, USA',
      timePosted: '1 days ago',
      applicants: 38
    },
    {
      id: 18,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Pinterest',
      location: 'San Francisco, USA',
      timePosted: '1 days ago',
      applicants: 32
    },
    {
      id: 19,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Snapchat',
      location: 'Santa Monica, USA',
      timePosted: '1 day ago',
      applicants: 27
    },
    {
      id: 20,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'TikTok',
      location: 'Los Angeles, USA',
      timePosted: '1 days ago',
      applicants: 41
    },
    {
      id: 21,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Discord',
      location: 'San Francisco, USA',
      timePosted: '1 days ago',
      applicants: 24
    },
    {
      id: 22,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Zoom',
      location: 'San Jose, USA',
      timePosted: '1 days ago',
      applicants: 30
    },
    {
      id: 23,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Dropbox',
      location: 'San Francisco, USA',
      timePosted: '1 day ago',
      applicants: 22
    },
    {
      id: 24,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Square',
      location: 'San Francisco, USA',
      timePosted: '1 days ago',
      applicants: 28
    },
    {
      id: 25,
      companyLogo: companyLogo,
      jobTitle: 'UI/UX Designer',
      companyName: 'Stripe',
      location: 'San Francisco, USA',
      timePosted: '1 days ago',
      applicants: 35
    }
  ];

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="sidebar">
          <ProfileCard />
        </div>

        <div className="main-content">
          <div className="hero-section">
            <h1 className="hero-title">Find your Dream Job, <span className="hero-name">Albert!</span></h1>
            <p className="hero-subtitle">
              Explore the latest job openings and apply for the best opportunities available today!
            </p>
          </div>

          <div className="search-section">
            <div className="search-bar-container">
              <input 
                type="text" 
                placeholder="Job Title, Company, or Keywords" 
                className="job-search-input"
              />
              <div className="search-separator"></div>
              <label htmlFor="location-select" className="sr-only">Select Location</label>
              <select id="location-select" className="location-select" aria-label="Select Location">
                <option>Select Location</option>
              </select>
              <div className="search-separator"></div>
              <label htmlFor="job-type-select" className="sr-only">Job Type</label>
              <select id="job-type-select" className="job-type-select" aria-label="Job Type">
                <option>Job Type</option>
              </select>
              <button className="search-btn ">
                <img src={searchIcon} alt="Search" className="search-icon-btn" />
                Search
              </button>
            </div>
          </div>
          
          <div className="filter-tags">
            <span className="filter-label">Similar:</span>
            <button className="filter-tag">Frontend</button>
            <button className="filter-tag">Backend</button>
            <button className="filter-tag">Graphic Designer</button>
          </div>

          <div className="section-separator"></div>

          <div className="job-sections">
            <div className="job-section">
              <div className="section-header">
                <h2 className="section-title">Featured Jobs</h2>
                <a href="#" className="see-all-link">See Featured Jobs</a>
              </div>
              <div className="job-cards-grid">
                {featuredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    companyLogo={job.companyLogo}
                    jobTitle={job.jobTitle}
                    companyName={job.companyName}
                    location={job.location}
                    timePosted={job.timePosted}
                    applicants={job.applicants}
                    promoted="promoted"
                  />
                ))}
              </div>
            </div>

            <div className="section-separator"></div>

            <div className="job-section">
              <div className="section-header">
                <h2 className="section-title">Recommended Jobs</h2>
                <a href="#" className="see-all-link">See Recommended Jobs</a>
              </div>
              <div className="job-cards-grid">
                {recommendedJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    companyLogo={job.companyLogo}
                    jobTitle={job.jobTitle}
                    companyName={job.companyName}
                    location={job.location}
                    timePosted={job.timePosted}
                    applicants={job.applicants}
                  />
                ))}
              </div>
            </div>

            <div className="section-separator"></div>

            <div className="job-section">
              <div className="section-header">
                <h2 className="section-title">Latest Jobs</h2>
                <a href="#" className="see-all-link">See Latest Jobs</a>
              </div>
              <div className="job-cards-grid">
                {latestJobs.map((job) => (
                  <JobCard

                    key={job.id}
                    companyLogo={job.companyLogo}
                    jobTitle={job.jobTitle}
                    companyName={job.companyName}
                    location={job.location}
                    timePosted={job.timePosted}
                    applicants={job.applicants}
                    
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;