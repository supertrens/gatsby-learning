import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>Pitrens Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME </Link>
          </li>
          <li>
            <Link to="/blog">BLOG </Link>
          </li>
          <li>
            <Link to="/about">ABOUT </Link>
          </li>
          <li>
            <Link to="/contact">CONTACT </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
