import sectionStyles from "./styles/sectionStyles.module.css";

export default function MainSection() {
  return (
    <section className={sectionStyles.main}>
      <p>
        안녕하세요. 박경서입니다.
        <br />
      </p>
      <p>
        창의력을 바탕으로 혁신적인 프론트엔드 솔루션을 제공하여 사용자 경험을
        향상시키고, 팀의 성과에 기여하는 주도적인 역할을 하겠습니다.
      </p>
    </section>
  );
}
