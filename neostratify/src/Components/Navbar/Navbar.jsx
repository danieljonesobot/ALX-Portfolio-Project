import React from 'react';
import styles from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={styles.nabar}>
            <a href='/'><img style={{ height: 50 }} src='/logo.png' /></a>
            <div>
                <a className={styles.title} href='/'>Portfolio</a>
            </div>
            <div className={styles.menu}>
                <ul lassName={styles.menuItems}>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#services'>Services</a>
                    </li>
                    <li>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#testimonials'>Testimonials</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
