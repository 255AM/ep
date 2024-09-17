import React from 'react';
import profilePic from './ep.jpg'; // Replace with your image path
import './App.css';

const About = () => (
  <div className="about-container">
    <div className="image-container">
      <img src={profilePic} alt="Profile" className="profile-pic" />
    </div>
    <div className="about-text">
      <p>
        I’m an experienced reporter, editor, and newsroom leader who excels at elevating reporters’ work to serve readers and listeners.
        During my time at nonprofit newsrooms, working in both radio and digital media, my work has been honored with an
        <a href="https://www.spj.org/sdxa13.asp" target="_blank" rel="noopener noreferrer"> SPJ Sigma Delta Chi award,</a>
        regional and national Edward R. Murrow awards, and a
        <a href="https://peabodyawards.com/award-profile/the-popes-long-con/" target="_blank" rel="noopener noreferrer"> Peabody Award.</a>
      </p>
      <p>
        In 2024-2025, I’m interested in working with newsrooms to optimize their editorial processes, consult on topics from coverage plan creation to newsroom management,
        and am available to advise and assist on special projects, including around the election.
        I am also focused on shrinking news deserts across the country and improving the sustainability of journalism startups.
      </p>
    </div>
  </div>
);

export default About;
