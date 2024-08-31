import React from 'react';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';


export default function NavBar() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [display, setDisplay] = useState([]);

  function handleSideNavClick() {
    setSideNavOpen(!sideNavOpen);
    if (!sideNavOpen) {
      setDisplay(['Favorite Recipes']);
    }
    else {
      setDisplay([]);
    }
  }

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <button className='nav-toggle'
            onClick={handleSideNavClick}>
            <FaBars />
          </button>
        </div>
        {/* conditionally display navigation items here */}
        {sideNavOpen && (
          <div className='side-nav'>
            <ul id='nav-list'>
              {display.map((list, index) => (
                <li className='nav-list-item' key={index}>{list}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}