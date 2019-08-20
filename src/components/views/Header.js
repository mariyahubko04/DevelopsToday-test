import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navigation } from '../../styles';

const Header = () => (
  <Navigation>
    <ul>
      <li>
        <NavLink
          className="navlink"
          to="/"
          activeClassName="active-navlink"
          exact
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink"
          to="/add-post/"
          activeClassName="active-navlink"
        >
          Add post
        </NavLink>
      </li>
    </ul>
  </Navigation>
);

export default Header;
