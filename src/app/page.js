import MainSection from "../components/MainSection";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
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
