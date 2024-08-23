import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">Home</Link>
        <Link to='cars'>Cars</Link>
        <Link to="/topics">Topics</Link>
        {/* <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/order">Order</Link>
        <Link to="/staff">Staff</Link> */}
    </nav>
  );
}

export default Navigation;
