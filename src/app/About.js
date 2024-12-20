import sectionStyles from "./styles/sectionStyles.module.css";

export default function About() {
  return (
    <section className={sectionStyles.about}>
      <div>
        <p>이름</p>
        <p>박경서</p>
      </div>
      <div>
        <p>생년월일</p>
        <p>1996.09.07</p>
      </div>
    </section>
  );
}
