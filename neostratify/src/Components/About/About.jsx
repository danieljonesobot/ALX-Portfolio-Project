import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img
            className={styles.aboutImage} 
            src={getImageUrl('about/aboutImage.png')} 
            alt='About Image' 
            />

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                <img src={getImageUrl('about/web.png')} alt='web design icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Web Design</h3>
                    <p>Our expert team of designers creates stunning, 
                    user-friendly websites that capture your brand essence and engage your audience.
                    </p>
                </div>
                </li>


                <li className={styles.aboutItem}>
                <img src={getImageUrl('about/settings.png')} alt='settings icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Search Engine Optimization (SEO)</h3>
                    <p>
                    We optimize your website to rank higher in search engine results, 
                    driving organic traffic and increasing your visibility online. 
                    </p>
                </div>
                </li>

                <li className={styles.aboutItem}>
                <img src={getImageUrl('about/digitalMarketing.png')} alt='digitalMarketing icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Digital Marketing</h3>
                    <p>
                    Our digital marketing strategies are designed to attract, convert and retain customers, 
                    utilizing the latest tools and techniques to maximize your ROI.
                    </p>
                </div>
                </li>


                <li className={styles.aboutItem}>
                <img src={getImageUrl('about/wand.png')} alt='branding icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Branding</h3>
                    <p>
                    We help you establish a strong and memorable brand identity, 
                    ensuring consistency across all your marketing channels.
                    </p>
                </div>
                </li>

                <li className={styles.aboutItem}>
                <img src={getImageUrl('about/chat.png')} alt='chat icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Social Media Management</h3>
                    <p>
                    Our social media experts manage your social media accounts, creating engaging 
                    content and fostering meaningful interactions with your audience.
                    </p>
                </div>
                </li>

            </ul>
        </div>
    </section>
  )
}

export default About;
