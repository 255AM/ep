import React from 'react';
import { Link } from 'react-router-dom';

const Consulting = () => (
  <div className="about-container">
    <div className="about-text">
      <h2>Consulting</h2>
      <h3>Processes and Strategy</h3>
      <p>
        Are you launching a new newsroom? Revamping an existing one? I can help you create the key editorial
        processes and tools you will need, from a customized ethics policy to beat plans, editorial calendars,
        and editing flow.
      </p>
      <h3>Elections Strategy and Voter Guides</h3>
      <p>
        There are huge information gaps in many communities across the country, especially when it comes to
        basic civic information like who is on a local ballot. It is never too early to plan for the next
        election: I can help you craft your newsroom's election strategy, thinking through all of the pieces
        you will need to serve your audience.
      </p>
      <h3>Product Thinking</h3>
      <p>
        Do you want to create a new tool? Launch a new newsletter? I can help you assess demand for the product,
        make it user-friendly, and create a step-by-step plan to get it out into the world.
      </p>
      <h3>Editing</h3>
      <p>
        Sometimes you just need an extra set of hands, whether it is filling in for someone on leave or tackling
        the larger projects no one else has time to edit. I will work with your reporters or freelancers from
        pitch to publication, acting as the sherpa that guides them through the often stressful process and gets
        the story across the finish line.
      </p>
      <h3>Current Interests</h3>

      <p>Besides the above, I am trying to answer two huge (unrelated) questions:</p>
      <p>
        <strong>1:</strong> How can local newsrooms work smarter to provide the information their communities
        need about judicial elections in ways that clearly explain the stakes?
      </p>
      <p>
        <strong>2:</strong> What are the time-tested best practices for newsrooms to tackle their culture,
        both bottom-up and top-down? How could giving reporters and newsroom leaders clear, actionable steps
        improve sustainability for these organizations?
      </p>

      <p>If you're interested, <Link to="/contact">get in touch</Link>!</p>
    </div>
  </div>
);

export default Consulting;
