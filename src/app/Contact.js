import contactStyles from "./styles/sectionStyles.module.css";

export default function Contact() {
  return (
    <main className={contactStyles.contactContainer}>
      <section className={contactStyles.contactMailWrapper}>
        <p>mail</p>
        <p>zerm0907@gmail.com</p>
      </section>
      <section className={contactStyles.contactGithubWrapper}>
        <p>github</p>
        <p>https://github.com/zermzerm</p>
      </section>
      <section className={contactStyles.contactTistoryWrapper}>
        <p>tistory</p>
        <p>https://zermzerm.tistory.com/</p>
      </section>
      <section className={contactStyles.contactTellWrapper}>
        <p>tell</p>
        <p>01048715869</p>
      </section>
    </main>
  );
}
