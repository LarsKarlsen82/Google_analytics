import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <header>
        <nav>

          <div>
            <ul>
              <li><Link to="/">Hjem</Link></li>
              <li><Link to="/about">Om</Link></li>
              <li><Link to="/dogs">Doggies</Link></li>
            </ul>
          </div>
        </nav>
      </header>

    </div>
  );
};

export default NavBar;
