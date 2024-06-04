import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollArea} id="home">
        Home
      </div>
      <div className={styles.scrollArea} id="about">
        <About />
      </div>
      <div className={styles.scrollArea} id="skills">
        <Skills />
      </div>
      <div className={styles.scrollArea} id="projects">
        <Projects />
      </div>
      <div className={styles.scrollArea} id="contact">
        <Contact />
      </div>
    </div>
  );
}
