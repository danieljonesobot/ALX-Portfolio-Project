import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Get in touch with us</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon1.png")} alt="Email Icon" />
          <a href="mailto:info@neostratify.com.ng">info@neostratify.com.ng</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/phoneIcon.png")} alt="Phone Icon" />
          <a href="#">+23470670xxxxx</a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/whatsappIcon.png")}
            alt="WhatsApp Icon"
          />
          <a href="https://wa.me/+2347067089407">Whatsapp</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
