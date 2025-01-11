import MainSection from "./MainSection";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import styles from "./styles/styles.module.css";

export default function Home() {
  return (
    <main className={styles.scrollContainer}>
      <section className={styles.scrollArea} id="home">
        <MainSection />
      </section>
      <section className={styles.scrollArea} id="about">
        <About />
      </section>
      <section className={styles.scrollArea} id="skills">
        <Skills />
      </section>
      <section className={styles.scrollArea} id="projects">
        <Projects />
      </section>
      <section className={styles.scrollArea} id="contact">
        <Contact />
      </section>
    </main>
  );
}
