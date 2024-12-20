import sectionStyles from "./styles/sectionStyles.module.css";

export default function Skills() {
  return (
    <section className={sectionStyles.skills}>
      <div className={sectionStyles.skillsContainer}>
        skills
        <hr className={sectionStyles.customHr} />
        <div>
          <p>Html</p>
          <p>Css</p>
          <p>StyledComponent</p>
          <p>CssModule</p>
          <p>React</p>
          <p>ReactQuery</p>
          <p>TypeCcript</p>
          <p>NextJS</p>
          <p>Recoil</p>
          <p>Zustand</p>
        </div>
      </div>
    </section>
  );
}
