import MainSection from "./MainSection";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import styles from "./styles/styles.module.css";

export default function Home() {
  return (
    <main className={styles.scrollContainer}>
      <div className={styles.scrollArea} id="home">
        <MainSection />
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
    </main>
  );
}
