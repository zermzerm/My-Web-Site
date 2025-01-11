import sectionStyles from "./styles/sectionStyles.module.css";
import Image from "next/image";

export default function Skills() {
  return (
    <main className={sectionStyles.skills}>
      <section className={sectionStyles.skillsContainer}>
        <p className={sectionStyles.skillsTitle}>skills</p>
        <hr className={sectionStyles.customHr} />
        <article className={sectionStyles.skillsWrapper}>
          <Image src="/images/HTML.svg" width={70} height={70} alt="HTML" />
          <Image src="/images/CSS.svg" width={70} height={70} alt="CSS" />
          <Image
            src="/images/StyledComponents.svg"
            width={70}
            height={70}
            alt="StyledComponents"
          />
          <Image src="/images/React.svg" width={70} height={70} alt="HTML" />
          <Image
            src="/images/TypeScript.svg"
            width={70}
            height={70}
            alt="React"
          />
          <Image
            src="/images/NextJS-Dark.svg"
            width={70}
            height={70}
            alt="NextJS-Dark"
          />
          <Image src="/images/Figma.svg" width={70} height={70} alt="Figma" />
          <Image src="/images/Git.svg" width={70} height={70} alt="Git" />
          <p>ReactQuery</p>
          <p>Zustand</p>
          <p>Recoil</p>
        </article>
      </section>
    </main>
  );
}
