import React from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <div>
      <Link to="/">List of Cat Pictures</Link>
      <Link to="test">List of Books</Link>
    </div>
  </header>
);

export default Header;
