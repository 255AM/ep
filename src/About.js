import React from 'react';
import profilePic from './ep.jpg'; // Replace with your image path
import './App.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget
          nisl euismod, feugiat nunc sit amet, semper tortor. Nullam dapibus, neque at
          suscipit lobortis, orci sapien euismod ligula, eget ullamcorper risus enim non
          quam. Vivamus vehicula ante id risus lobortis vulputate.
        </p>
      </div>
    </div>
  );
};

export default About;
