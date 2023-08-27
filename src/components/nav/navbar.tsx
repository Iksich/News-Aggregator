import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from '../../styles/nav.module.css'

type NavBarProps = object;

export const NavBar: React.FC<NavBarProps> = () => {
  const [navActive, setNavActive] = useState<boolean>(false);

  useEffect(() => {
    const navToggle = document.getElementById('nav_toggle');
    const navList = document.getElementById('nav_list');
    let close = false;

    if (navToggle && navList) {
      navToggle.addEventListener('click', () => {
        if (close) {
          navList.classList.remove('active');
          setNavActive(false);
          close = false;
        } else {
          navList.classList.add('active');
          setNavActive(true);
          close = true;
        }
      });
    }
  }, []);

  return (
    <div className={styles.nav}>
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <Link to="/">News Adda</Link>
          </div>
          <nav>
            <div className="nav-mobile">
              <Link to="#" id="nav_toggle">
                <span></span>
              </Link>
            </div>
            <ul className={`nav_list ${navActive ? 'active' : ''}`} id="nav_list">
              <li>
                <a href="/">Top News</a>
              </li>
              <li>
                <a href="/entertainment">Entertainment</a>
              </li>
              <li>
                <a href="/business">Business</a>
              </li>
              <li>
                <a href="/science">Science</a>
              </li>
              <li>
                <a href="/technology">Technology</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              {/* <li><a href="/">Contact Me</a></li> */}
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};
