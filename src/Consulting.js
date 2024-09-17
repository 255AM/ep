import React from 'react';
import { Link } from 'react-router-dom';

const Consulting = () => (
  <div className="about-container">
    <div className="about-text">
      <h2>Consulting</h2>
      <h3>Processes and Strategy</h3>
      <p>
        Are you launching or revamping a newsroom? I can help create key editorial processes, including ethics policies, beat plans, editorial calendars, and editing workflows.
      </p>
      <h3>Elections Strategy and Voter Guides</h3>
      <p>
        I can help you craft your newsroom’s election strategy, addressing the information gaps in civic knowledge and helping serve your audience during elections.
      </p>
      <h3>Product Thinking</h3>
      <p>
        I assist in assessing demand for new products, ensuring user-friendliness, and crafting step-by-step plans to launch tools, newsletters, or other products.
      </p>
      <h3>Editing</h3>
      <p>
        Whether filling in for a leave or handling large projects, I work with reporters from pitch to publication, ensuring the story reaches its full potential.
      </p>
      <h3>Current Interests</h3>
      <p>
        I’m exploring how local newsrooms can better provide judicial election coverage and implement best practices for newsroom culture improvement.
      </p>
      <p>If you're interested, <Link to="/contact">get in touch</Link>!</p>
    </div>
  </div>
);

export default Consulting;
