import React from "react";
import { Link } from "gatsby"

import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <p>
        In this page I will show some information so that the user can get to
        know me as a software engineer
      </p>
      <Link to="/contact">Contact Me</Link>
      <Footer />
    </div>
  );
};

export default AboutPage;
