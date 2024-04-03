import React from "react";
import techstack from "../../data/techstack.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Expertise.module.css";
import { Link } from "react-router-dom";

const Expertise = () => {
  return (
    <section className={styles.container} id="expertise">
      <h2 className={styles.title}>Our Expertise</h2>
      <div className={styles.content}>
        <div className={styles.stacks}>
          {techstack.map((stack, index) => {
            return (
              <div key={index} className={styles.stack}>
                <div className={styles.stackImageContainer}>
                  <img src={getImageUrl(stack.imageSrc)} alt={stack.title} />
                </div>
                <p>{stack.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, index) => {
            return (
              <li key={index} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.solution} Image`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.solution}`}</h3>
                  <ul>
                    {historyItem.experiences.map((experience, index) => {
                      return <li key={index}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.contactBtnContainer}>
        <Link to="/services" className={styles.contactBtn}>
          Learn more
        </Link>
      </div>
    </section>
  );
};

export default Expertise;
