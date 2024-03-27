import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Expertise from "./Components/Expertise/Expertise";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
    </div>
  );
}

export default App;
