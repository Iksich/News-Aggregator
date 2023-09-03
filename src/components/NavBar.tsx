import React, { useEffect, useState } from 'react';
import style from '../styles/nav.module.css';
import { Link } from 'react-router-dom';

interface NavBarProps {
  title: string;
  links: {
    text: string;
    to: string;
  }[];
  // You can add more props here as needed
}

export const NavBar: React.FC<NavBarProps> = ({ title, links }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const navToggle = document.getElementById('nav_toggle');
    const navUl = document.getElementById('nav_list');

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        setIsActive((prevIsActive) => !prevIsActive);
      });
    }
  }, []);

  return (
    <div style={style}>
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <Link to="/">{title}</Link>
          </div>
          <nav>
            <div className="nav-mobile">
              <button id="nav_toggle">
                <span></span>
              </button>
            </div>
            <ul className={`nav_list ${isActive ? 'active' : ''}`} id="nav_list">
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.to}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};
