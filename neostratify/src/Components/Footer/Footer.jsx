import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={styles.container}>
      <p>© Neostratify {year}</p>
    </footer>
  );
};

export default Footer;
