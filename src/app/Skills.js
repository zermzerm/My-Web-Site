import sectionStyles from "./styles/sectionStyles.module.css";
import Image from "next/image";

export default function Skills() {
  return (
    <main className={sectionStyles.skills}>
      <section className={sectionStyles.skillsContainer}>
        <h1 className={sectionStyles.skillsTitle}>Skills</h1>
        {/* <hr className={sectionStyles.customHr} /> */}
        <article className={sectionStyles.skillsWrapper}>
          <Image src="/images/HTML.svg" width={70} height={70} alt="HTML" />
          <Image src="/images/CSS.svg" width={70} height={70} alt="CSS" />
          <Image
            src="/images/StyledComponents.svg"
            width={70}
            height={70}
            alt="StyledComponents"
          />
          <Image src="/images/React.svg" width={70} height={70} alt="React" />
          <Image
            src="/images/TypeScript.svg"
            width={70}
            height={70}
            alt="TypeScript"
          />
          <Image
            src="/images/NextJS-Dark.svg"
            width={70}
            height={70}
            alt="NextJS-Dark"
          />
          <Image src="/images/Figma.svg" width={70} height={70} alt="Figma" />
          <Image src="/images/Git.svg" width={70} height={70} alt="Git" />
          <Image src="/images/Github.svg" width={70} height={70} alt="Github" />
          <Image
            src="/images/ReactQuery.svg"
            width={70}
            height={70}
            alt="ReactQuery"
          />
          <Image
            src="/images/Zustand.svg"
            width={70}
            height={70}
            alt="Zustand"
          />
          <Image
            src="/images/Recoil.svg"
            width={70}
            height={70}
            alt="Recoil"
            className={sectionStyles.skillsImage}
          />
          <Image
            src="/images/Netlify.svg"
            width={70}
            height={70}
            alt="Netlify"
          />
          <Image src="/images/Vercel.svg" width={70} height={70} alt="Vercel" />
          <Image
            src="/images/CSSModule.png"
            width={70}
            height={70}
            alt="CSSModule"
          />
        </article>
      </section>
    </main>
  );
}
