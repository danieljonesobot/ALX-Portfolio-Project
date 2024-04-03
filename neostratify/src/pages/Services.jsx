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
        <div className="">
          <h1>Business Solutions</h1>
          <p>
            lorem ipsum cum adaludum expecto lorem magnifacto amush la re.
            Instanto indaboski abush kabash. Expecto patrolum ninevei alumunum
            posca ballon door. Aryun kayak lorem ipsum perfecto liam mey
            ridicule francais inuit. lorem ipsum cum adaludum expecto lorem
            magnifacto amush la re. Instanto indaboski abush kabash. Expecto
            patrolum ninevei alumunum posca ballon door. Aryun kayak lorem ipsum
            perfecto liam mey ridicule francais inuit.
          </p>
        </div>

        <div className="">
          <h1>Digital Solutions</h1>
          <p>
            lorem ipsum cum adaludum expecto lorem magnifacto amush la re.
            Instanto indaboski abush kabash. Expecto patrolum ninevei alumunum
            posca ballon door. Aryun kayak lorem ipsum perfecto liam mey
            ridicule francais inuit. lorem ipsum cum adaludum expecto lorem
            magnifacto amush la re. Instanto indaboski abush kabash. Expecto
            patrolum ninevei alumunum posca ballon door. Aryun kayak lorem ipsum
            perfecto liam mey ridicule francais inuit.
          </p>
        </div>

        <div className="">
          <h1>Strategic Planning</h1>
          <p>
            lorem ipsum cum adaludum expecto lorem magnifacto amush la re.
            Instanto indaboski abush kabash. Expecto patrolum ninevei alumunum
            posca ballon door. Aryun kayak lorem ipsum perfecto liam mey
            ridicule francais inuit. lorem ipsum cum adaludum expecto lorem
            magnifacto amush la re. Instanto indaboski abush kabash. Expecto
            patrolum ninevei alumunum posca ballon door. Aryun kayak lorem ipsum
            perfecto liam mey ridicule francais inuit.
          </p>
        </div>

        <div className="">
          <h1>IT Solutions</h1>
          <p>
            lorem ipsum cum adaludum expecto lorem magnifacto amush la re.
            Instanto indaboski abush kabash. Expecto patrolum ninevei alumunum
            posca ballon door. Aryun kayak lorem ipsum perfecto liam mey
            ridicule francais inuit. lorem ipsum cum adaludum expecto lorem
            magnifacto amush la re. Instanto indaboski abush kabash. Expecto
            patrolum ninevei alumunum posca ballon door. Aryun kayak lorem ipsum
            perfecto liam mey ridicule francais inuit.
          </p>
        </div>
      </div>

      <div className="topBlur"></div>

      <Contact />
      <Footer />
    </section>
  );
};

export default Services;
