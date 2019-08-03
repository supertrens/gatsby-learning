import React from "react"

import Footer from "../components/footer";
import Header from "../components/header";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>From this page you will get links to my social media profile</p>
      <a href="https://www.linkedin.com/in/supertrens/" target="_blank">
        LinkedIn
      </a>
      <br></br>
      <a href="https://www.facebook.com/SuperTrens" target="_blank">
        Facebook
      </a>
      <Footer />
    </div>
  )
}

export default ContactPage
