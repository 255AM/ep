import React from 'react';
import profilePic from './ep.jpg';
import './App.css';

const About = () => (
  <div className="about-container">
    <div className="image-container">
      <img src={profilePic} alt="Profile" className="profile-pic" />
    </div>
    <div className="about-text">
      <h2>About</h2>
      <p>
        I am an experienced reporter, editor and newsroom leader who excels at elevating reporters' work to serve readers and listeners.
        During my time at nonprofit newsrooms, working in both radio and digital media, my work has been honored with an{' '}
        <a href="https://www.spj.org/sdxa13.asp" target="_blank" rel="noopener noreferrer">SPJ Sigma Delta Chi award</a>,
        {' '}regional and national Edward R. Murrow awards, and a{' '}
        <a href="https://peabodyawards.com/award-profile/the-popes-long-con/" target="_blank" rel="noopener noreferrer">Peabody Award</a>.
      </p>
      <p>
        Since 2024, I have been working with newsrooms around the country on investigative reporting, editing, civic engagement and special projects.
      </p>
    </div>
  </div>
);

export default About;
