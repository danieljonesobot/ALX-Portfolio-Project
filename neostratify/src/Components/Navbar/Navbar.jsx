import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <img style={{ height: 50 }} src="/logoPurple.png" />
      </a>
      <div>
        <a className={styles.title} href="/">
          Neostratify
        </a>
      </div>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen === true
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#expertise">Expertise</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            {/* <a href="#solutions">Services</a> */}
            <Link to="/services">Solutions</Link>
          </li>

          {/* <li>
            <Link to="/testimonials">Testimonials</Link>
          </li> */}

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
