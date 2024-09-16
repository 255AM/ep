import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        Email us at{' '}
        <a href="mailto:erica.m.peterson@gmail.com">erica.m.peterson@gmail.com</a>
      </p>
      <p>
        Connect on{' '}
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
      <p>Join our Slack channels:</p>
      <ul>
        <li>
          <a href="https://newsproductalliance.slack.com" target="_blank" rel="noopener noreferrer">
            News Product Alliance
          </a>
        </li>
        <li>
          <a href="https://newsrevenuehub.slack.com" target="_blank" rel="noopener noreferrer">
            News Revenue Hub
          </a>
        </li>
        <li>
          <a href="https://newspack.slack.com" target="_blank" rel="noopener noreferrer">
            Newspack
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
