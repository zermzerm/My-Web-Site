import contactStyles from "./styles/sectionStyles.module.css";

export default function Contact() {
  return (
    <section className={contactStyles.contactContainer}>
      <div className={contactStyles.contactMailWrapper}>
        <p>mail</p>
        <p>zerm0907@gmail.com</p>
      </div>
      <div className={contactStyles.contactGithubWrapper}>
        <p>github</p>
        <p>https://github.com/zermzerm</p>
      </div>
      <div className={contactStyles.contactTistoryWrapper}>
        <p>tistory</p>
        <p>https://zermzerm.tistory.com/</p>
      </div>
      <div className={contactStyles.contactTellWrapper}>
        <p>tell</p>
        <p>01048715869</p>
      </div>
    </section>
  );
}
