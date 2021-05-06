import React from "react";
import Hero from "../../components/Hero"

function About() {
  return (
    <section id="about" className="py-5 text-center">
      <Hero />
      <div className="container border-green box-bg-red box-shadow-purple box-shadow-yellow">
        <h1 data-testid="about" className="display-1 text-center">
          About
        </h1>
        <p>
          I have worked to overcome obstacles to become a full stack developer
          graduating from University of Utah’s boot camp near the top of the
          class, earning me a full-stack developer certificate with a background
          in Industrial/Organizational Psychology. I have studied diligently to
          learn and implement React, Redux, and GraphQL. I implemented all three
          of these in a project called Rolodeck where I worked with a team and
          implemented GraphQL for the entire project, programmed a QR scanner in
          React, and implemented Redux for easily transferable data.
        </p>
      </div>
    </section>
  );
}

export default About;
