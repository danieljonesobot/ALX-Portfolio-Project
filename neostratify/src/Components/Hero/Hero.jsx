import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Unlock the full potential of your business and stand out in an ever evolving world.</h1>
            <p className={styles.description}> 
            We help small businesses establish strong brand recognition, boost online presence 
            and drive growth through our comprehensive suite of services and innovative solutions.
            </p>
            <a className={styles.contactBtn} href='mailto:daniel.jonesobot@gmail.com'>Get in touch</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl('hero/heroImage.png')} alt='Hero Image'/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero;
