// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About;





import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutTitle,
  AboutDescription,
} from "./AboutStyle";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutTitle>About Me</AboutTitle>

        <AboutDescription>
          I'm <strong>Ayush Jindal</strong>, a Software Engineer and Data
          Analyst with a passion for building scalable backend applications and
          transforming raw data into actionable insights.
          <br />
          <br />
          My expertise spans <strong>Golang</strong>, REST API development,
          PostgreSQL, MySQL, Redis, Docker, AWS, and backend architecture, along
          with <strong>SQL, Python, Power BI, Excel, and data visualization</strong>
          for analytics and business intelligence.
          <br />
          <br />
          I enjoy solving real-world business problems through technology—whether
          it's designing efficient backend services, optimizing system
          performance, automating workflows, or developing interactive
          dashboards that support data-driven decision-making.
          <br />
          <br />
          I'm continuously learning modern technologies and best practices while
          seeking opportunities where I can contribute to scalable software,
          analytics solutions, and innovative products.
        </AboutDescription>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;