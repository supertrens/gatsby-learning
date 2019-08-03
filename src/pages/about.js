import React from "react";
import { Link } from "gatsby"


const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        In this page I will show some information so that the user can get to
        know me as a software engineer
      </p>
      <Link to="/contact">Contact Me</Link>
    </div>
  );
};

export default AboutPage;
