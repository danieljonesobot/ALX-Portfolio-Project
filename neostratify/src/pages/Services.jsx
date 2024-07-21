import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import styles from "../App.module.css";
import "./services.css";

const Services = () => {
  return (
    <section className={styles.App}>
      <Navbar />
      <div className="container">
        <div className="solution">
          <h1>Business Solutions</h1>
          <br />
          <p>
            With Neostratify, you can trust us to handle the complexities of
            starting and running a business, allowing you to focus on what you
            do best – growing your business.
          </p>
          <ul>
            <li>
              Name Search: We help you find the perfect name for your business
              by conducting thorough name searches to ensure availability and
              compliance with regulatory requirements.
            </li>

            <li>
              Company Registration: Our team assists you in registering your
              company, handling all the necessary paperwork and legal
              requirements to get your business up and running quickly and
              efficiently.
            </li>

            <li>
              Corporate Bank Account: We facilitate the opening of a corporate
              bank account for your business, making it easier to manage your
              finances and conduct transactions.
            </li>

            <li>
              Company Profile: We help you create a professional company profile
              that reflects your brand identity and showcases your products or
              services to potential customers and partners.
            </li>
          </ul>
        </div>

        <br />

        <div className="solution">
          <h1>Digital Solutions</h1>
          <br />
          <p>
            With Neostratify's digital solutions, you can establish a strong and
            cohesive online presence that drives engagement, builds brand
            loyalty, and helps you achieve your business goals.
          </p>

          <ul>
            <li>
              Domain Registration: We help you secure the perfect domain name
              for your website, ensuring it aligns with your brand and is easy
              for customers to remember.
            </li>

            <li>
              Website Setup: Our team of experts can design and develop a custom
              website tailored to your specific needs, incorporating the latest
              design trends and technologies to create a visually appealing and
              user-friendly site.
            </li>

            <li>
              Professional Email Setup: We set up professional email accounts
              for your business, giving you a more polished and credible
              appearance when communicating with customers and partners.
            </li>

            <li>
              Social Media Setup: We assist you in setting up and optimizing
              your social media profiles across various platforms, helping you
              connect with your audience and build a strong online presence.
            </li>
          </ul>
        </div>

        <br />

        <div className="solution">
          <h1>Strategic Planning</h1>
          <br />
          <p>
            Our expertise helps you can gain a clear understanding of your
            business's potential, assisting you in developing a roadmap for
            success that drives growth and profitability.
          </p>
          <ul>
            <li>
              Market Research: We conduct in-depth market research to help you
              understand your target audience, identify market trends, and
              uncover opportunities for growth.
            </li>

            <br />

            <li>
              Business and Financial Modeling: Our team helps you create a
              comprehensive business model that outlines your value proposition,
              revenue streams and key partnerships, enabling you to make
              informed decisions about your business. We also create detailed
              financial models to help you forecast revenue, expenses, and cash
              flow, enabling you to make informed financial decisions and plan
              for the future.
            </li>

            <br />

            <li>
              Business Plan Writing: We assist you in writing a detailed
              business plan that outlines your goals, strategies, and financial
              projections, providing a roadmap for your business's future
              success.
            </li>

            <br />

            <li>
              Pitch Deck: We help you create a compelling pitch deck that
              highlights your business's unique value proposition, market
              opportunity, and financial projections, making it easier to
              attract investors and secure funding.
            </li>
          </ul>
        </div>

        <br />
        <br />
        <br />

        <div className="solution">
          <h1>IT Solutions</h1>
          <br />
          <p>
            With our IT solutions, you can leverage the latest technologies to
            streamline your operations, enhance security, and improve overall
            efficiency.
          </p>

          <ul>
            <li>
              Call Center Implementation: We help you set up a call center for
              your business, providing the infrastructure and technology needed
              to handle customer inquiries and support efficiently.
            </li>

            <br />

            <li>
              Network Cabling (CAT6): Our team can install CAT6 network cabling
              to ensure fast and reliable internet connectivity throughout your
              office, helping you stay connected and productive.
            </li>

            <br />

            <li>
              Internet Connection: We provide high-speed internet connection
              solutions tailored to your business's needs, ensuring reliable and
              fast internet access for your employees and customers.
            </li>

            <br />

            <li>
              CCTV Installation: We offer CCTV installation services to help you
              monitor and secure your premises, providing peace of mind and
              enhancing the safety of your business.
            </li>

            <br />

            <li>
              Home and Office Automation: Our experts can help you automate
              various aspects of your home or office, including lighting,
              security systems, and climate control, providing convenience and
              energy efficiency.
            </li>
          </ul>
        </div>
      </div>

      <div className="topBlur"></div>

      <Contact />
      <Footer />
    </section>
  );
};

export default Services;
