import React from 'react';
import { Link } from 'react-router';

const styles ={
  logoName: {paddingLeft: '10px'}
  aboutLink: {fontSize: '30px', color 'blue'}
}

const Navbar = () => (
  <nav>
    <div className="nav-wrapper">
      <Link to="/" style={styles.logoName}>Props Tracer</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li> <Link to="/" style={styles.aboutLink}>Insert Link Here</Link></li>
      </ul>
    </div>
  </nav>
)

export default Navbar;
